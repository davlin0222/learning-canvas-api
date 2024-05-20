// Get reference to the <canvas> element
const canvas = document.getElementById("canvas");

// Get the 2D rendering context
const ctx = canvas.getContext("2d");

//? Active question: How do I make the green rectangle take up all the space?

// Set fill color to green
ctx.fillStyle = "green";

// Draw a filled rectangle that covers the entire canvas:
// - top-left corner at (0, 0)
// - width of the canvas
// - height of the canvas
ctx.fillRect(0, 0, canvas.width, canvas.height);
