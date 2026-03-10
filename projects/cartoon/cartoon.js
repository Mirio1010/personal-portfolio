// Get the canvas and drawing context
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// =========================
// Background Sky
// =========================
ctx.fillStyle = "#3e1abeff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// =========================
// Sun
// =========================
ctx.beginPath();
ctx.arc(700, 80, 45, 0, Math.PI * 2);
ctx.fillStyle = "#d7d7daff";
ctx.fill();
ctx.strokeStyle = "white";
ctx.lineWidth = 3;
ctx.stroke();

// =========================
// Ground
// =========================
ctx.fillStyle = "#1c341dff";
ctx.fillRect(0, 380, canvas.width, 120);

// =========================
// Caption Text
// =========================
ctx.fillStyle = "black";
ctx.font = "28px Arial";
ctx.fillText("Blast Off! My Cartoon Rocket Ship", 180, 40);

// =========================
// Rocket Body
// =========================
ctx.beginPath();
ctx.moveTo(350, 300); // bottom left
ctx.lineTo(350, 170); // left side up
ctx.lineTo(450, 170); // top right body
ctx.lineTo(450, 300); // bottom right
ctx.closePath();
ctx.fillStyle = "#d9d9d9";
ctx.fill();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.stroke();

// =========================
// Rocket Nose Cone
// =========================
ctx.beginPath();
ctx.moveTo(350, 170);
ctx.lineTo(400, 90);
ctx.lineTo(450, 170);
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();

// =========================
// Left Fin
// =========================
ctx.beginPath();
ctx.moveTo(350, 260);
ctx.lineTo(310, 330);
ctx.lineTo(350, 300);
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();

// =========================
// Right Fin
// =========================
ctx.beginPath();
ctx.moveTo(450, 260);
ctx.lineTo(490, 330);
ctx.lineTo(450, 300);
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();

// =========================
// Window
// =========================
ctx.beginPath();
ctx.arc(400, 210, 22, 0, Math.PI * 2);
ctx.fillStyle = "#7ec8e3";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

// =========================
// Door Panel / Detail
// =========================
ctx.beginPath();
ctx.moveTo(385, 240);
ctx.lineTo(415, 240);
ctx.lineTo(415, 290);
ctx.lineTo(385, 290);
ctx.closePath();
ctx.fillStyle = "#b0b0b0";
ctx.fill();
ctx.stroke();

// =========================
// Rocket Flames
// =========================
ctx.beginPath();
ctx.moveTo(370, 300);
ctx.lineTo(385, 345);
ctx.lineTo(400, 310);
ctx.lineTo(415, 345);
ctx.lineTo(430, 300);
ctx.closePath();
ctx.fillStyle = "orange";
ctx.fill();
ctx.strokeStyle = "red";
ctx.stroke();

// Inner flame
ctx.beginPath();
ctx.moveTo(385, 300);
ctx.lineTo(395, 332);
ctx.lineTo(400, 312);
ctx.lineTo(405, 332);
ctx.lineTo(415, 300);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();
ctx.strokeStyle = "orange";
ctx.stroke();

// =========================
// Launch Pad
// =========================
ctx.fillStyle = "#777";
ctx.fillRect(320, 330, 160, 15);
ctx.strokeStyle = "black";
ctx.strokeRect(320, 330, 160, 15);

// =========================
// Clouds
// =========================
function drawCloud(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.arc(x + 20, y - 10, 22, 0, Math.PI * 2);
  ctx.arc(x + 45, y, 20, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.strokeStyle = "white";
  ctx.stroke();
}

drawCloud(90, 90);
drawCloud(200, 130);
drawCloud(520, 120);

// =========================
// Grass using for loop + translate
// Requirement: use a for loop with translate
// =========================
ctx.save();
ctx.translate(20, 380);

for (let i = 0; i < 25; i++) {
  ctx.beginPath();
  ctx.moveTo(0, 20);
  ctx.lineTo(5, 0);
  ctx.lineTo(10, 20);
  ctx.strokeStyle = "darkgreen";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.translate(30, 0);
}

ctx.restore();

// Note, this was really cool and interesting. I've never done something like this until now. I will definitely use this in my future web related projects for styling pages!
