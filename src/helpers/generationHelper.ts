///<reference path="../components/Block.ts"/>
//
// function prepareNextGen(blocks: Block[]) {
//     blocks.forEach((block:Block)=>{
//         if(block.isAlive){
//             block.isAlive = willSurvive(block, blocks);
//         }
//     })
// }


function SetNeighbours(block: Block, blocks: Block[]) {
    const neighbours = blocks.filter(b=>{
        const isX = b.x > (block.x - block.size *2) && b.x < (block.x + block.size*2);
        const isY = b.y > (block.y - block.size *2) && b.y < (block.y + block.size*2);
        if(b.x === block.x && b.y === block.y) return false; //is is that block;
        return isX&&isY;
    });
    block.setNeighbours(neighbours);
}
