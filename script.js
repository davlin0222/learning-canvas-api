// Get reference to the <canvas> element
const canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 800;

// Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Set fill color to green
ctx.fillStyle = "green";

drawSquare(ctx, 100, 100);

// Clear part of the canvas
ctx.clearRect(250, 250, 120, 100);

drawRectangleWithCutout(ctx, 40, 40);

function drawSquare(ctx, squarePosX, squarePosY) {
	const squareWidth = 200;
	const squareHeight = 200;

	// const squarePosX = ctx.canvas.width / 2 - squareWidth / 2;
	// const squarePosY = ctx.canvas.width / 2 - squareHeight / 2;

	// Fill the entire canvas with the green rectangle
	ctx.fillRect(squarePosX, squarePosY, squareWidth, squareHeight);

	// Text: "Square"
	ctx.fillStyle = "#eee";
	ctx.font = "50px monospace";

	const squareCenterX = squarePosX + squareWidth / 2;
	const squareCenterY = squarePosY + squareHeight / 2;

	ctx.textAlign = "center";
	ctx.textBaseline = "middle";

	ctx.fillText("Square", squareCenterX, squareCenterY);
}

function drawRectangleWithCutout(ctx, posX, posY) {
	ctx.fillRect(posX, posY, 100, 100);
	ctx.clearRect(posX + 20, posY + 20, 60, 60);
	ctx.strokeRect(posX + 35, posY + 35, 30, 30);
}
