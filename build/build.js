var squaresInRow = 20;
var squares = [];
var squareSize = 0;
function setup() {
    createCanvas(windowWidth, windowHeight);
    squareSize = width / squaresInRow;
    for (var y = 0; y < width; y += squareSize) {
        for (var x = 0; x < width; x += squareSize) {
            var isAlive = probabilityBool(10);
            var newSquare = new Block(x, y, squareSize, isAlive);
            squares.push(newSquare);
        }
    }
    frameRate(1);
}
function draw() {
    squares.forEach(function (block) {
        block.draw();
    });
}
function windowResized() {
    setup();
}
var Block = (function () {
    function Block(x, y, size, isAlive) {
        this.isAlive = false;
        this.x = x;
        this.y = y;
        this.size = size;
        this.isAlive = isAlive;
    }
    Block.prototype.draw = function () {
        if (this.isAlive) {
            fill('black');
        }
        else {
            fill('white');
        }
        square(this.x, this.y, this.size);
    };
    return Block;
}());
function probabilityBool(probability) {
    return Math.random() < probability / 100;
}
//# sourceMappingURL=../src/sketch/build.js.map