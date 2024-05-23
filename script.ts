// Get reference to the <canvas> element, using type assertion for safety
const canvas = document.getElementById("canvas") as HTMLCanvasElement;

// Set canvas dimensions (optional)
canvas.width = 800;
canvas.height = 800;

// Get the 2D rendering context, with type assertion
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

// Function to draw a square with text inside
function drawSquare(
	ctx: CanvasRenderingContext2D,
	squarePosX: number,
	squarePosY: number
) {
	const squareWidth = 200;
	const squareHeight = 200;

	ctx.fillRect(squarePosX, squarePosY, squareWidth, squareHeight); // Draw the square

	ctx.fillStyle = "white";

	// Text styles and positioning
	ctx.font = "50px monospace";
	const squareCenterX = squarePosX + squareWidth / 2;
	const squareCenterY = squarePosY + squareHeight / 2;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText("Square", squareCenterX, squareCenterY); // Add "Square" text
}

// Function to draw a rectangle with a cutout
function drawRectangleWithCutout(
	ctx: CanvasRenderingContext2D,
	posX: number,
	posY: number
) {
	ctx.fillRect(posX, posY, 100, 100); // Outer rectangle
	ctx.clearRect(posX + 20, posY + 20, 60, 60); // Cutout
	ctx.strokeRect(posX + 35, posY + 35, 30, 30); // Inner rectangle (outline)
}

ctx.fillStyle = "green"; // Set fill color to green

// Draw the initial square
drawSquare(ctx, 100, 100);

ctx.fillStyle = "white";

// Clear a part of the canvas (to demonstrate clearing)
ctx.clearRect(250, 250, 120, 100);

ctx.fillStyle = "gray"; // Assuming you want the rectangle filled with green
// Draw the rectangle with cutout
drawRectangleWithCutout(ctx, 40, 40);
