// Example using HTML5 Canvas to draw an image with a system-provided symbol
function drawSystemSymbol(canvas, symbolName, size) {
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Example: Using a system-provided symbol (here, a circle)
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, size / 2, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';  // Example color for illustration
    ctx.fill();
    ctx.closePath();
}

// Usage example with an HTML5 canvas element
let canvas = document.createElement('canvas');
canvas.width = 100;
canvas.height = 100;
document.body.appendChild(canvas);

drawSystemSymbol(canvas, 'circle', 50);  // Draws a circle with diameter 50 pixels
