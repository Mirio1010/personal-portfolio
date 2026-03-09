// Get the canvas and drawing context
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// =========================
// Background (sky)
// =========================
ctx.fillStyle = "skyblue";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// =========================
// Sun
// =========================
ctx.beginPath();
ctx.arc(700, 80, 50, 0, Math.PI * 2);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.strokeStyle = "orange";
ctx.lineWidth = 3;
ctx.stroke();

// =========================
// Ground
// =========================
ctx.fillStyle = "green";
ctx.fillRect(0, 350, canvas.width, 150);

// =========================
// House base
// =========================
ctx.fillStyle = "#d2691e";
ctx.fillRect(250, 200, 250, 170);
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.strokeRect(250, 200, 250, 170);

// =========================
// Roof
// =========================
ctx.beginPath();
ctx.moveTo(225, 200);
ctx.lineTo(375, 100);
ctx.lineTo(525, 200);
ctx.closePath();
ctx.fillStyle = "maroon";
ctx.fill();
ctx.stroke();

// =========================
// Door
// =========================
ctx.fillStyle = "#654321";
ctx.fillRect(345, 280, 60, 90);
ctx.strokeRect(345, 280, 60, 90);

// Door knob
ctx.beginPath();
ctx.arc(392, 325, 4, 0, Math.PI * 2);
ctx.fillStyle = "gold";
ctx.fill();

// =========================
// Left window
// =========================
ctx.fillStyle = "lightblue";
ctx.fillRect(280, 240, 50, 50);
ctx.strokeRect(280, 240, 50, 50);

// Window lines
ctx.beginPath();
ctx.moveTo(305, 240);
ctx.lineTo(305, 290);
ctx.moveTo(280, 265);
ctx.lineTo(330, 265);
ctx.stroke();

// =========================
// Right window
// =========================
ctx.fillStyle = "lightblue";
ctx.fillRect(420, 240, 50, 50);
ctx.strokeRect(420, 240, 50, 50);

// Window lines
ctx.beginPath();
ctx.moveTo(445, 240);
ctx.lineTo(445, 290);
ctx.moveTo(420, 265);
ctx.lineTo(470, 265);
ctx.stroke();

// =========================
// Caption text on canvas
// =========================
ctx.fillStyle = "black";
ctx.font = "28px Arial";
ctx.fillText("My Happy Cartoon House!", 230, 40);

// =========================
// Fence using for loop + translate
// Requirement: use a for loop with translate
// =========================
ctx.save();
ctx.translate(40, 320);

for (let i = 0; i < 12; i++) {
  ctx.fillStyle = "#f5deb3";
  ctx.fillRect(0, 0, 15, 60);
  ctx.strokeRect(0, 0, 15, 60);

  // Move drawing position for next fence post
  ctx.translate(25, 0);
}

ctx.restore();

// Fence horizontal rails
ctx.fillStyle = "#deb887";
ctx.fillRect(35, 335, 290, 8);
ctx.fillRect(35, 360, 290, 8);
ctx.strokeRect(35, 335, 290, 8);
ctx.strokeRect(35, 360, 290, 8);

// =========================
// Simple path walkway
// =========================
ctx.beginPath();
ctx.moveTo(370, 370);
ctx.lineTo(340, 500);
ctx.lineTo(460, 500);
ctx.lineTo(380, 370);
ctx.closePath();
ctx.fillStyle = "#c2b280";
ctx.fill();
ctx.stroke();

// =========================
// Clouds
// =========================
function drawCloud(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.arc(x + 25, y - 10, 25, 0, Math.PI * 2);
  ctx.arc(x + 55, y, 20, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.strokeStyle = "white";
  ctx.stroke();
}

drawCloud(100, 80);
drawCloud(220, 120);
