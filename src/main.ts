const squaresInRow = 20;
const squares: any = [];
let squareSize = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    squareSize = width / squaresInRow;
    for (let y = 0; y < width; y += squareSize) {
        for (let x = 0; x < width; x += squareSize) {
            squares.push({x, y});
        }
    }
    console.log(squares);
}

function draw() {
    squares.forEach(sq => {
        square(sq.x, sq.y, squareSize, squareSize);
    })

}

function windowResized() {
    setup();
}
