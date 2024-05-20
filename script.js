// Get reference to the <canvas> element
const canvas = document.getElementById("canvas");

// Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Set fill color to green
ctx.fillStyle = "green";

drawCenteredSquare(ctx, canvas);

function drawCenteredSquare(ctx) {
	const squareWidth = 200;
	const squareHeight = 200;

	const squarePosX = ctx.canvas.width / 2 - squareWidth / 2;
	const squarePosY = ctx.canvas.width / 2 - squareHeight / 2;

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
