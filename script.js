// Get reference to the <canvas> element
const canvas = document.getElementById("canvas");

// Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Set fill color to green
ctx.fillStyle = "green";

// Fill the entire canvas with the green rectangle
ctx.fillRect(10, 10, 200, 200);

// Text: "Square"

ctx.fillStyle = "#eee"; // explicitly sets the text color to (default) 'black'
ctx.font = "50px monospace";
ctx.fillText("Square", 20, 50);
