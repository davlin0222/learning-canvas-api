// Get reference to the <canvas> element
const canvas = document.getElementById("canvas");

// Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Set fill color to green
ctx.fillStyle = "green";

// Fill the entire canvas with the green rectangle
ctx.fillRect(10, 10, 200, 200);

// Text: "Square"
ctx.fillStyle = "#eee";
ctx.font = "50px monospace";

// Calculate text dimensions
const textMetrics = ctx.measureText("Square");
const textWidth = textMetrics.width;
const textHeight =
	textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent;

// Calculate center coordinates of the square
const squareCenterX = 105; // 10 (start) + 200 (width) / 2
const squareCenterY = 105; // 10 (start) + 200 (height) / 2

// Calculate text position for centering
const textX = squareCenterX - textWidth / 2;
const textY = squareCenterY + textHeight / 2; // Since the text baseline is below the y coordinate

ctx.fillText("Square", textX, textY);
