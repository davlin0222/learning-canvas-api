// Get reference to the <canvas> element
const canvas = document.getElementById("canvas");

// Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Set fill color to green
ctx.fillStyle = "green";

// Draw a filled rectangle:
// - top-left corner at (10, 10)
// - width of 150 units
// - height of 100 units
ctx.fillRect(10, 10, 150, 100);
