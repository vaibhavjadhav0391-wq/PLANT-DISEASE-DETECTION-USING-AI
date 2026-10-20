export const generativeTreeSource = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Generative Tree</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body, html { width: 100%; height: 100%; overflow: hidden; background: #070d09; }
  canvas { display: block; width: 100%; height: 100%; }
</style>
</head>
<body>
<canvas id="canvas"></canvas>
<script>
(function() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let W = 0, H = 0;

  let GROWTH_SPEED_BASE = 0.006;
  const HOLD_DURATION = 400;
  const PARTICLE_COUNT = 50;
  const _pad = parseFloat(new URLSearchParams(location.search).get('p')) || 1;

  let branches = [];
  let particles = [];
  let holdTimer = 0;
  let fadeTimer = 0;
  let waitTimer = 0;
  let shake = 0;
  let mouse = { x: -1000, y: -1000, vx: 0, vy: 0 };

  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', function(e) {
    mouse.vx = (e.clientX - mouse.x) * 0.05;
    mouse.vy = (e.clientY - mouse.y) * 0.05;
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createBranch(x1, y1, angle, length, depth, maxDepth) {
    const x2 = x1 + Math.cos(angle) * length;
    const y2 = y1 - Math.sin(angle) * length;
    const thickness = Math.max(1, (maxDepth - depth + 1) * 2.2);
    
    // Emerald green & golden glow colors for agriculture
    const hue = 142 + (depth * 4) + (Math.random() * 15 - 7.5);
    const lightness = 35 + (depth * 5);
    const color = "hsl(" + hue + ", 75%, " + lightness + "%)";

    const branch = {
      x1: x1, y1: y1,
      x2: x2, y2: y2,
      angle: angle,
      length: length,
      depth: depth,
      thickness: thickness,
      color: color,
      growthProgress: 0,
      growthSpeed: GROWTH_SPEED_BASE * (1.1 + Math.random() * 0.5),
      swayOffset: Math.random() * Math.PI * 2,
      children: []
    };

    if (depth < maxDepth && length > 12) {
      const numBranches = (depth < 2) ? 2 : (Math.random() > 0.35 ? 2 : 3);
      const angleSpread = 0.42 + Math.random() * 0.25;

      for (let i = 0; i < numBranches; i++) {
        const subAngle = angle + (i - (numBranches - 1) / 2) * angleSpread + (Math.random() - 0.5) * 0.2;
        const subLen = length * (0.68 + Math.random() * 0.16);
        branch.children.push(createBranch(x2, y2, subAngle, subLen, depth + 1, maxDepth));
      }
    }
    return branch;
  }

  function createTree() {
    branches = [];
    holdTimer = 0;
    fadeTimer = 0;
    waitTimer = 0;
    const startX = W * 0.58; // place center-right to leave center-left for text
    const startY = H * 0.98;
    const trunkLen = Math.min(H * 0.24, 180) * _pad;
    branches.push(createBranch(startX, startY, Math.PI / 2, trunkLen, 1, 9));

    // Initialize floating spore particles
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -0.3 - Math.random() * 0.7,
        size: 1.2 + Math.random() * 2.8,
        alpha: 0.1 + Math.random() * 0.6,
        hue: 135 + Math.random() * 30
      });
    }
  }

  function updateBranch(b, parentFinished) {
    if (parentFinished) {
      b.growthProgress = Math.min(1, b.growthProgress + b.growthSpeed);
    }
    const thisFinished = b.growthProgress >= 0.99;
    for (let i = 0; i < b.children.length; i++) {
      updateBranch(b.children[i], thisFinished);
    }
  }

  function drawBranch(b, time) {
    if (b.growthProgress <= 0) return;

    const sway = Math.sin(time * 0.0018 + b.swayOffset) * (0.015 * b.depth);
    const curAngle = b.angle + sway;
    const curLen = b.length * b.growthProgress;
    const curX2 = b.x1 + Math.cos(curAngle) * curLen;
    const curY2 = b.y1 - Math.sin(curAngle) * curLen;

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(b.x1, b.y1);
    ctx.lineTo(curX2, curY2);
    ctx.strokeStyle = b.color;
    ctx.lineWidth = b.thickness;
    ctx.lineCap = 'round';
    
    // Add glowing bloom on higher level canopy
    if (b.depth >= 6) {
      ctx.shadowColor = 'rgba(52, 211, 153, 0.45)';
      ctx.shadowBlur = 8;
    }
    ctx.stroke();

    // Leaf buds at the tips
    if (b.children.length === 0 && b.growthProgress > 0.8) {
      const leafAlpha = (b.growthProgress - 0.8) * 5;
      ctx.beginPath();
      ctx.arc(curX2, curY2, 3 + Math.sin(time * 0.003 + b.swayOffset) * 1.2, 0, Math.PI * 2);
      ctx.fillStyle = "hsla(" + (145 + Math.sin(time * 0.001) * 10) + ", 85%, 65%, " + leafAlpha + ")";
      ctx.shadowColor = 'rgba(16, 185, 129, 0.7)';
      ctx.shadowBlur = 12;
      ctx.fill();
    }
    ctx.restore();

    for (let i = 0; i < b.children.length; i++) {
      b.children[i].x1 = curX2;
      b.children[i].y1 = curY2;
      drawBranch(b.children[i], time);
    }
  }

  function frame(time) {
    // Decay shake
    shake *= 0.92;

    ctx.fillStyle = '#070d09';
    ctx.fillRect(0, 0, W, H);

    // Subtle atmospheric ambient glow behind tree
    const glowGrad = ctx.createRadialGradient(W * 0.6, H * 0.65, 50, W * 0.6, H * 0.65, Math.max(W, H) * 0.55);
    glowGrad.addColorStop(0, 'rgba(16, 185, 129, 0.09)');
    glowGrad.addColorStop(0.5, 'rgba(5, 150, 105, 0.03)');
    glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glowGrad;
    ctx.fillRect(0, 0, W, H);

    // Update branches
    for (let i = 0; i < branches.length; i++) {
      updateBranch(branches[i], true);
      drawBranch(branches[i], time);
    }

    // Drifting spore particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx + Math.sin(time * 0.001 + i) * 0.3;
      p.y += p.vy;
      if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;

      ctx.save();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = "hsla(" + p.hue + ", 80%, 65%, " + p.alpha + ")";
      ctx.shadowColor = 'rgba(52, 211, 153, 0.5)';
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.restore();
    }

    holdTimer++;
    fadeTimer++;
    waitTimer++;

    requestAnimationFrame(frame);
  }

  createTree();
  requestAnimationFrame(frame);
})();
<\/script>
</body>
</html>
`;
