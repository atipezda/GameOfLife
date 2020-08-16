class Block {
    x: number;
    y: number;
    size: number;
    isAlive: boolean = false;
    neighbours: this[] = [];
    willBeAlive:boolean = false;

    constructor(x: number, y: number, size: number, isAlive: boolean) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.isAlive = isAlive;
    }

    draw() {
        if (this.isAlive) {
            fill('black');
        } else {
            fill('white');
        }
        square(this.x, this.y, this.size);
    }

    setNeighbours(neighbours: this[]) {
        this.neighbours = neighbours;
        if (this.isAlive) {
            console.log(this.neighbours);
        }
    }

    nextGen(){
        const cellsAlive = this.neighbours.filter(block => block.isAlive).length;
        if(this.isAlive){
            this.willBeAlive = cellsAlive >= 2 && cellsAlive <= 3;
        }else{
            this.willBeAlive = cellsAlive === 3;
        }
    }
    nextDay(){
        this.isAlive = this.willBeAlive;
        this.willBeAlive = false;
    }

}
