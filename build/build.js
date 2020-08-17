var Block = (function () {
    function Block(x, y, size, isAlive) {
        this.isAlive = false;
        this.neighbours = [];
        this.willBeAlive = false;
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
    Block.prototype.setNeighbours = function (neighbours) {
        this.neighbours = neighbours;
    };
    Block.prototype.nextGen = function () {
        var cellsAlive = this.neighbours.filter(function (block) { return block.isAlive; }).length;
        if (this.isAlive) {
            this.willBeAlive = cellsAlive >= 2 && cellsAlive <= 3;
        }
        else {
            this.willBeAlive = cellsAlive === 3;
        }
    };
    Block.prototype.nextDay = function () {
        this.isAlive = this.willBeAlive;
        this.willBeAlive = false;
    };
    return Block;
}());
function SetNeighbours(block, blocks) {
    var neighbours = blocks.filter(function (b) {
        var isX = b.x > (block.x - block.size * 2) && b.x < (block.x + block.size * 2);
        var isY = b.y > (block.y - block.size * 2) && b.y < (block.y + block.size * 2);
        if (b.x === block.x && b.y === block.y)
            return false;
        return isX && isY;
    });
    block.setNeighbours(neighbours);
}
var squaresInRow = 50;
var blocks = [];
var squareSize = 0;
var l = 0;
function setup() {
    createCanvas(windowWidth, windowHeight);
    squareSize = width / squaresInRow;
    for (var y = 0; y < width; y += squareSize) {
        for (var x = 0; x < width; x += squareSize) {
            var isAlive = probabilityBool(10);
            l += 1;
            var newBlock = new Block(x, y, squareSize, isAlive);
            blocks.push(newBlock);
        }
    }
    blocks.forEach(function (block) {
        SetNeighbours(block, blocks);
    });
    frameRate(10);
}
function draw() {
    blocks.forEach(function (block) {
        block.draw();
        block.nextGen();
    });
    blocks.forEach(function (block) {
        block.nextDay();
    });
}
function windowResized() {
    setup();
}
function probabilityBool(probability) {
    return Math.random() < probability / 100;
}
//# sourceMappingURL=../src/sketch/build.js.map