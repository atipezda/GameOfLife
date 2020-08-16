const squaresInRow = 20;
const squares: any = [];
let squareSize = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    squareSize = width / squaresInRow;
    for (let y = 0; y < width; y += squareSize) {
        for (let x = 0; x < width; x += squareSize) {
            const isAlive = probabilityBool(10);
            const newSquare = new Block(x,y,squareSize, isAlive);
            squares.push(newSquare);
        }
    }
    frameRate(1);
}

function draw() {
    squares.forEach((block: Block) => {
        block.draw();
    });

}

function windowResized() {
    setup();
}
