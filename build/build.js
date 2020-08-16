var squaresInRow = 20;
var squares = [];
var squareSize = 0;
function setup() {
    createCanvas(windowWidth, windowHeight);
    squareSize = width / squaresInRow;
    for (var y = 0; y < width; y += squareSize) {
        for (var x = 0; x < width; x += squareSize) {
            squares.push({ x: x, y: y });
        }
    }
    console.log(squares);
}
function draw() {
    squares.forEach(function (sq) {
        square(sq.x, sq.y, squareSize, squareSize);
    });
}
function windowResized() {
    setup();
}
var Square = (function () {
    function Square(x, y) {
        this.x = x;
        this.y = y;
    }
    return Square;
}());
//# sourceMappingURL=../src/sketch/build.js.map