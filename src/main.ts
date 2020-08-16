///<reference path="helpers/generationHelper.ts"/>
const squaresInRow = 20;
const blocks: any = [];
let squareSize = 0;
let l = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    squareSize = width / squaresInRow;
    for (let y = 0; y < width; y += squareSize) {
        for (let x = 0; x < width; x += squareSize) {
            const isAlive = probabilityBool(10);
            l += 1;
            // const isAlive = l === 158 || l === 157 || l === 156 || l === 177;
            const newBlock = new Block(x, y, squareSize, isAlive);
            blocks.push(newBlock);
        }
    }

    blocks.forEach((block: Block) => {
        SetNeighbours(block, blocks);
    });

    frameRate(1);
}

function draw() {
    blocks.forEach((block: Block) => {
        block.draw();
        block.nextGen();
    });
    blocks.forEach((block: Block)=>{
        block.nextDay();
    })
}

function windowResized() {
    setup();
}
