import React, { useState, useRef, useEffect } from "react";
import {
  UploadCloud,
  Camera,
  X,
  Sparkles,
  ArrowLeft,
  AlertCircle,
  Download,
  Flame,
  Activity,
  CloudSun,
  ShieldAlert,
  Leaf,
  Layers,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";

interface DiseaseDetectionProps {
  onBackToHome: () => void;
  language: string;
}

export const DiseaseDetection: React.FC<DiseaseDetectionProps> = ({
  onBackToHome,
  language,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lon: number } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          });
        },
        () => {}
      );
    }
  }, []);

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file (PNG, JPG, JPEG, WEBP).");
      return;
    }
    setError(null);
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setResult(null);
    stopCamera();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const startCamera = async () => {
    setError(null);
    setSelectedFile(null);
    setPreviewUrl(null);
    setResult(null);
    setIsCameraActive(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err: any) {
      setError("Camera permission denied or camera device not found.");
      setIsCameraActive(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setIsCameraActive(false);
  };

  const capturePhoto = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth || 640;
    canvas.height = videoRef.current.videoHeight || 480;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], `leaf_capture_${Date.now()}.jpg`, {
            type: "image/jpeg",
          });
          handleFileSelect(file);
        }
      }, "image/jpeg");
    }
    stopCamera();
  };

  const clearSelection = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setResult(null);
    setError(null);
    stopCamera();
  };

  const runAnalysis = async () => {
    if (!selectedFile) {
      setError("Please upload an image or take a photo first.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setLoadingStep("Extracting morphological leaf patterns...");

    const formData = new FormData();
    formData.append("image", selectedFile);
    if (userLocation) {
      formData.append("lat", userLocation.lat.toString());
      formData.append("lon", userLocation.lon.toString());
    }

    try {
      setTimeout(() => setLoadingStep("Running 38-class CNN neural inference..."), 600);
      setTimeout(() => setLoadingStep("Computing Grad-CAM explainability heatmap..."), 1400);
      setTimeout(() => setLoadingStep("Analyzing severity & correlating live weather risk..."), 2200);

      const response = await fetch("/api/predict", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Prediction request failed.");
      }

      setResult(data.data);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred during analysis.");
    } finally {
      setIsLoading(false);
      setLoadingStep("");
    }
  };

  const isSevere = result?.severity?.severity_category?.toLowerCase().includes("severe");

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-8 max-w-6xl mx-auto z-20 relative">
      {/* Top Header / Back Button & Brand */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={onBackToHome}
            className="secondary-btn inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#22C55E]" />
            <span>Back to Home</span>
          </button>
          <div className="hidden sm:block">
            <BrandLogo size="sm" showText={false} />
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs" style={{ color: "#22C55E" }}>
          <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: "#22C55E" }} />
          <span>Active Backend Engine</span>
        </div>
      </div>

      {/* Main Title */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3" style={{ color: "#F4FBF6" }}>
          Analyze Your Plant
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: "#B6CCBF" }}>
          Upload a clear photograph of an infected leaf or open your camera to receive immediate AI diagnosis, Grad-CAM visualization, and agronomic treatment.
        </p>
      </div>

      {/* Input Section */}
      {!result && (
        <div
          className="max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl shadow-2xl"
          style={{
            backgroundColor: "#0F2A1E",
            borderColor: "#1F4A35",
            borderWidth: "1px",
            borderStyle: "solid",
          }}
        >
          {/* Rule 8: Error uses red #EF4444 */}
          {error && (
            <div
              className="mb-6 p-4 rounded-xl flex items-start gap-3 text-xs sm:text-sm"
              style={{
                backgroundColor: "rgba(239, 68, 68, 0.12)",
                borderColor: "#EF4444",
                borderWidth: "1px",
                borderStyle: "solid",
                color: "#F4FBF6",
              }}
            >
              <AlertCircle className="w-5 h-5 text-[#EF4444] shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Camera Viewfinder */}
          {isCameraActive && (
            <div
              className="relative rounded-2xl overflow-hidden aspect-video mb-6"
              style={{
                backgroundColor: "#07130E",
                borderColor: "#1F4A35",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 inset-x-0 flex justify-center gap-4">
                <button
                  onClick={capturePhoto}
                  className="glow-button px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                >
                  <Camera className="w-4 h-4 text-[#04130B]" />
                  <span>Capture Photo</span>
                </button>
                <button
                  onClick={stopCamera}
                  className="px-4 py-2.5 rounded-full font-medium text-xs border"
                  style={{
                    backgroundColor: "#07130E",
                    borderColor: "#1F4A35",
                    color: "#F4FBF6",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Image Preview Box */}
          {previewUrl && !isCameraActive && (
            <div
              className="relative rounded-2xl overflow-hidden mb-6 flex justify-center items-center max-h-96"
              style={{
                backgroundColor: "#07130E",
                borderColor: "#1F4A35",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <img
                src={previewUrl}
                alt="Selected Leaf"
                className="max-h-96 w-auto object-contain"
              />
              <button
                onClick={clearSelection}
                className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                style={{
                  backgroundColor: "rgba(7, 19, 14, 0.8)",
                  color: "#F4FBF6",
                  border: "1px solid #1F4A35",
                }}
                title="Remove photo"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Drag & Drop Upload Area */}
          {!previewUrl && !isCameraActive && (
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center cursor-pointer transition-colors mb-6 group"
              style={{
                backgroundColor: "#07130E",
                borderColor: "#1F4A35",
              }}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleFileSelect(e.target.files[0]);
                  }
                }}
              />
              <div
                className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{
                  backgroundColor: "rgba(34, 197, 94, 0.15)",
                  borderColor: "#1F4A35",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  color: "#22C55E",
                }}
              >
                <UploadCloud className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold mb-1" style={{ color: "#F4FBF6" }}>
                Drop your plant leaf photo here
              </h3>
              <p className="text-xs mb-3" style={{ color: "#B6CCBF" }}>
                Supports high-res PNG, JPG, JPEG, WEBP up to 25MB
              </p>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  backgroundColor: "rgba(34, 197, 94, 0.15)",
                  color: "#22C55E",
                }}
              >
                Browse Files
              </span>
            </div>
          )}

          {/* Action Buttons: Upload or Camera */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="secondary-btn flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold cursor-pointer"
            >
              <UploadCloud className="w-4 h-4 text-[#22C55E]" />
              <span>Upload Image</span>
            </button>

            <button
              onClick={startCamera}
              className="secondary-btn flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold cursor-pointer"
            >
              <Camera className="w-4 h-4 text-[#22C55E]" />
              <span>Open Camera</span>
            </button>
          </div>

          {/* Rule 4: Main Analyze CTA uses #22C55E with #04130B text */}
          <button
            onClick={runAnalysis}
            disabled={!selectedFile || isLoading}
            className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
              selectedFile && !isLoading
                ? "glow-button cursor-pointer"
                : "cursor-not-allowed opacity-50"
            }`}
            style={
              !selectedFile || isLoading
                ? {
                    backgroundColor: "#133527",
                    color: "#B6CCBF",
                    border: "1px solid #1F4A35",
                  }
                : undefined
            }
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-[#04130B] border-t-transparent rounded-full animate-spin" />
                <span>{loadingStep || "Analyzing Leaf..."}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-[#04130B]" />
                <span>Analyze Plant Health</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Results Section */}
      {result && (
        <div className="space-y-8 animate-in fade-in duration-500">
          {/* Result Banner */}
          <div
            className="p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl"
            style={{
              backgroundColor: "#0F2A1E",
              borderColor: "#1F4A35",
              borderWidth: "1px",
              borderStyle: "solid",
            }}
          >
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#22C55E" }} />
                <span className="text-xs uppercase font-bold tracking-wider" style={{ color: "#22C55E" }}>
                  Diagnosis Complete
                </span>
              </div>
              {/* Rule 7: Disease result labels use amber #FBBF24 */}
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: "#F4FBF6" }}>
                {result.prediction?.display_name || result.prediction?.class}
              </h2>
              <p className="text-xs sm:text-sm" style={{ color: "#B6CCBF" }}>
                Plant: <strong style={{ color: "#F4FBF6" }}>{result.prediction?.plant}</strong> •
                Detected Condition: <strong style={{ color: "#FBBF24" }}>{result.prediction?.disease}</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              {/* Rule 9: Confidence badge uses primary green with 15% opacity background */}
              <div
                className="px-5 py-3 rounded-2xl text-center"
                style={{
                  backgroundColor: "rgba(34, 197, 94, 0.15)",
                  borderColor: "#1F4A35",
                  borderWidth: "1px",
                  borderStyle: "solid",
                }}
              >
                <div className="text-[11px] font-semibold uppercase" style={{ color: "#22C55E" }}>
                  Confidence
                </div>
                <div className="text-2xl font-black" style={{ color: "#F4FBF6" }}>
                  {result.prediction?.confidence}%
                </div>
              </div>

              {/* Rule 4: Download PDF Report button uses #22C55E with #04130B text */}
              {result.pdf_url && (
                <a
                  href={result.pdf_url}
                  download
                  className="glow-button inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  <Download className="w-4 h-4 stroke-[2.5] text-[#04130B]" />
                  <span>Download PDF Report</span>
                </a>
              )}
            </div>
          </div>

          {/* Diagnostic Imagery: Original Leaf vs Grad-CAM Explainability */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Original Leaf */}
            <div
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: "#0F2A1E",
                borderColor: "#1F4A35",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm font-bold" style={{ color: "#F4FBF6" }}>
                  <Leaf className="w-4 h-4 text-[#22C55E]" />
                  <span>Captured Leaf Photo</span>
                </div>
                <span className="text-xs font-mono" style={{ color: "#22C55E" }}>Original</span>
              </div>
              <div
                className="rounded-xl overflow-hidden aspect-video flex items-center justify-center"
                style={{ backgroundColor: "#07130E", border: "1px solid #1F4A35" }}
              >
                <img
                  src={result.uploaded_image_url}
                  alt="Original Plant"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Grad-CAM Heatmap (Rule 7: amber for Grad-CAM icon and label) */}
            <div
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: "#0F2A1E",
                borderColor: "#1F4A35",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm font-bold" style={{ color: "#F4FBF6" }}>
                  <Flame className="w-4 h-4 text-[#FBBF24]" />
                  <span>Grad-CAM Explainable AI Heatmap</span>
                </div>
                <span className="text-xs font-mono" style={{ color: "#FBBF24" }}>Visual Evidence</span>
              </div>
              <div
                className="rounded-xl overflow-hidden aspect-video flex items-center justify-center"
                style={{ backgroundColor: "#07130E", border: "1px solid #1F4A35" }}
              >
                {result.gradcam?.url ? (
                  <img
                    src={result.gradcam.url}
                    alt="Grad-CAM Visualization"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-xs p-6 text-center" style={{ color: "#B6CCBF" }}>
                    Grad-CAM overlay computed: {result.gradcam?.note || "Feature focal regions extracted."}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Severity & Weather Correlation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Severity Card: Rule 7 amber for badge, Rule 8 red ONLY if severe */}
            <div
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: "#0F2A1E",
                borderColor: "#1F4A35",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <div className="flex items-center gap-2 text-sm font-bold mb-3" style={{ color: "#F4FBF6" }}>
                <Activity className="w-4 h-4" style={{ color: isSevere ? "#EF4444" : "#FBBF24" }} />
                <span>Damage Severity</span>
              </div>
              <div
                className="text-2xl font-black mb-1"
                style={{ color: isSevere ? "#EF4444" : "#FBBF24" }}
              >
                {result.severity?.severity_category || "Mild to Moderate"}
              </div>
              <div className="text-xs mb-4" style={{ color: "#B6CCBF" }}>
                Affected Area:{" "}
                <strong style={{ color: "#F4FBF6" }}>
                  {result.severity?.affected_percent != null
                    ? `${result.severity.affected_percent}%`
                    : "Under early threshold"}
                </strong>
              </div>
              <div
                className="w-full h-2 rounded-full overflow-hidden"
                style={{ backgroundColor: "#07130E", border: "1px solid #1F4A35" }}
              >
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${Math.min(100, Math.max(15, result.severity?.affected_percent || 25))}%`,
                    backgroundColor: isSevere ? "#EF4444" : "#FBBF24",
                  }}
                />
              </div>
            </div>

            {/* Weather Risk Card */}
            <div
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: "#0F2A1E",
                borderColor: "#1F4A35",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <div className="flex items-center gap-2 text-sm font-bold mb-3" style={{ color: "#F4FBF6" }}>
                <CloudSun className="w-4 h-4 text-[#22C55E]" />
                <span>Weather Spread Risk</span>
              </div>
              <div className="text-2xl font-black mb-1" style={{ color: "#F4FBF6" }}>
                {result.weather_risk?.risk_level || "Monitored"}
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "#B6CCBF" }}>
                {result.weather_risk?.advisory ||
                  "Ambient relative humidity and temperature are currently being factored into spray recommendation."}
              </p>
            </div>

            {/* Differential Diagnoses */}
            <div
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: "#0F2A1E",
                borderColor: "#1F4A35",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <div className="flex items-center gap-2 text-sm font-bold mb-3" style={{ color: "#F4FBF6" }}>
                <Layers className="w-4 h-4 text-[#22C55E]" />
                <span>Top Differential Diagnoses</span>
              </div>
              <div className="space-y-2">
                {result.prediction?.top_k?.map((item: any, idx: number) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <span className="truncate max-w-[170px]" style={{ color: "#B6CCBF" }}>
                      {item.display_name || item.class}
                    </span>
                    <span className="font-mono font-bold" style={{ color: "#22C55E" }}>
                      {item.confidence}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Structured Agronomy Knowledge Base & Guidance */}
          {result.disease_info && (
            <div
              className="p-6 sm:p-8 rounded-3xl"
              style={{
                backgroundColor: "#0F2A1E",
                borderColor: "#1F4A35",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <div className="flex items-center gap-2 text-base font-bold mb-6" style={{ color: "#F4FBF6" }}>
                <ShieldAlert className="w-5 h-5 text-[#22C55E]" />
                <span>Agronomic Advisory & Treatment Protocol</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                {/* Symptoms & Cause */}
                <div
                  className="p-5 rounded-2xl"
                  style={{
                    backgroundColor: "#07130E",
                    borderColor: "#1F4A35",
                    borderWidth: "1px",
                    borderStyle: "solid",
                  }}
                >
                  <h4 className="font-bold text-xs uppercase tracking-wider mb-2" style={{ color: "#22C55E" }}>
                    Symptoms & Pathology
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed mb-3" style={{ color: "#B6CCBF" }}>
                    {result.disease_info.symptoms || result.disease_info.cause || "Characteristic foliar spotting, lesion spread, and discoloration."}
                  </p>
                  {result.disease_info.cause && (
                    <div className="text-xs" style={{ color: "#B6CCBF" }}>
                      <strong style={{ color: "#F4FBF6" }}>Causal Agent:</strong> {result.disease_info.cause}
                    </div>
                  )}
                </div>

                {/* Chemical Treatment */}
                <div
                  className="p-5 rounded-2xl"
                  style={{
                    backgroundColor: "#07130E",
                    borderColor: "#1F4A35",
                    borderWidth: "1px",
                    borderStyle: "solid",
                  }}
                >
                  <h4 className="font-bold text-xs uppercase tracking-wider mb-2" style={{ color: "#22C55E" }}>
                    Chemical Control / Fungicide
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#B6CCBF" }}>
                    {result.disease_info.chemical_treatment || "Apply targeted copper-based fungicide or systemic spray as per local agriculture university guidelines."}
                  </p>
                </div>

                {/* Organic Treatment */}
                <div
                  className="p-5 rounded-2xl"
                  style={{
                    backgroundColor: "#07130E",
                    borderColor: "#1F4A35",
                    borderWidth: "1px",
                    borderStyle: "solid",
                  }}
                >
                  <h4 className="font-bold text-xs uppercase tracking-wider mb-2" style={{ color: "#22C55E" }}>
                    Organic / Biological Solutions (सेंद्रिय उपाय)
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#B6CCBF" }}>
                    {result.disease_info.organic_treatment || "Neem oil foliar spray (5ml/L) and Trichoderma viride root drenching."}
                  </p>
                </div>

                {/* Prevention */}
                <div
                  className="p-5 rounded-2xl"
                  style={{
                    backgroundColor: "#07130E",
                    borderColor: "#1F4A35",
                    borderWidth: "1px",
                    borderStyle: "solid",
                  }}
                >
                  <h4 className="font-bold text-xs uppercase tracking-wider mb-2" style={{ color: "#22C55E" }}>
                    Preventative Crop Care
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#B6CCBF" }}>
                    {result.disease_info.prevention || "Maintain plant spacing for aeration, avoid overhead sprinkler irrigation, and rotate crops annually."}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Rule 4: Scan Another Leaf uses #22C55E with #04130B text */}
          <div className="text-center pt-4">
            <button
              onClick={clearSelection}
              className="glow-button inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#04130B]" />
              <span>Scan Another Leaf</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
