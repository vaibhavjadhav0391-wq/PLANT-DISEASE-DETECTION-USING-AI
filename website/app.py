"""
app.py
------
Flask website and API backend for AgriVision-AI.
Supports both direct Jinja template rendering and JSON API for React frontend.
"""
import os
import sys
import uuid
from flask import Flask, render_template, request, redirect, url_for, send_from_directory, jsonify
from flask_cors import CORS

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if BASE_DIR not in sys.path:
    sys.path.insert(0, BASE_DIR)

from full_pipeline import run_full_pipeline  # noqa: E402
from reports.pdf_report_generator import generate_pdf_report  # noqa: E402

UPLOAD_FOLDER = os.path.join(os.path.dirname(os.path.abspath(__file__)), "static", "uploads")
PDF_FOLDER = os.path.join(os.path.dirname(os.path.abspath(__file__)), "static", "reports")
OUTPUT_DIR = os.path.join(BASE_DIR, "outputs")
FRONTEND_DIST = os.path.join(BASE_DIR, "frontend", "dist")

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(PDF_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_DIR, exist_ok=True)

ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "webp"}

app = Flask(__name__, static_folder="static")
CORS(app)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER


def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/")
def index():
    if os.path.exists(os.path.join(FRONTEND_DIST, "index.html")):
        return send_from_directory(FRONTEND_DIST, "index.html")
    return render_template("index.html")


@app.route("/<path:path>")
def serve_frontend_assets(path):
    if os.path.exists(os.path.join(FRONTEND_DIST, path)):
        return send_from_directory(FRONTEND_DIST, path)
    if os.path.exists(os.path.join(FRONTEND_DIST, "index.html")):
        return send_from_directory(FRONTEND_DIST, "index.html")
    return ("Not found", 404)


@app.route("/outputs/<path:filename>")
def serve_output(filename):
    return send_from_directory(OUTPUT_DIR, filename)


def process_prediction_request():
    if "image" not in request.files:
        return None, "No image file provided in request."

    file = request.files["image"]
    if file.filename == "" or not allowed_file(file.filename):
        return None, "Invalid file format. Please upload a PNG, JPG, JPEG, or WEBP image."

    ext = file.filename.rsplit(".", 1)[1].lower()
    unique_name = f"{uuid.uuid4().hex}.{ext}"
    save_path = os.path.join(app.config["UPLOAD_FOLDER"], unique_name)
    file.save(save_path)

    lat = request.form.get("lat")
    lon = request.form.get("lon")
    try:
        lat = float(lat) if lat else None
        lon = float(lon) if lon else None
    except ValueError:
        lat, lon = None, None

    result = run_full_pipeline(
        save_path, include_gradcam=True, include_severity=True,
        lat=lat, lon=lon,
    )

    result["uploaded_image_url"] = f"/static/uploads/{unique_name}"

    # Set web-accessible URL for Grad-CAM heatmap
    if result.get("gradcam") and result["gradcam"].get("heatmap_path"):
        hm_filename = os.path.basename(result["gradcam"]["heatmap_path"])
        result["gradcam"]["url"] = f"/outputs/{hm_filename}"

    # Generate the PDF report
    try:
        pdf_name = f"{uuid.uuid4().hex}.pdf"
        pdf_path = os.path.join(PDF_FOLDER, pdf_name)
        generate_pdf_report(result, pdf_path)
        result["pdf_url"] = f"/static/reports/{pdf_name}"
    except Exception as e:
        result["pdf_url"] = None
        result["pdf_error"] = str(e)

    # Clean non-serializable fields for JSON API
    if "raw_probs" in result:
        del result["raw_probs"]
    if "_local_image_path" in result:
        del result["_local_image_path"]

    return result, None


@app.route("/api/predict", methods=["POST"])
def api_predict():
    try:
        result, error = process_prediction_request()
        if error:
            return jsonify({"success": False, "error": error}), 400
        return jsonify({"success": True, "data": result})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


@app.route("/predict", methods=["POST"])
def predict():
    is_json_requested = (
        request.headers.get("Accept") == "application/json"
        or request.args.get("format") == "json"
    )
    try:
        result, error = process_prediction_request()
        if error:
            if is_json_requested:
                return jsonify({"success": False, "error": error}), 400
            return redirect(url_for("index"))

        if is_json_requested:
            return jsonify({"success": True, "data": result})

        return render_template("result.html", result=result)
    except Exception as e:
        if is_json_requested:
            return jsonify({"success": False, "error": str(e)}), 500
        return render_template("index.html", error=str(e))


if __name__ == "__main__":
    app.run(debug=True, port=5000)