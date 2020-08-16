class Block {
    x: number;
    y: number;
    size: number;
    isAlive: boolean = false;
    neighbours: this[] = [];
    willSurvive:boolean = false;

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
        if (this.neighbours.filter(block => block.isAlive).length > 3) {
            this.willSurvive = true;
        }else{
            this.willSurvive = false;
        }
    }
    nextDay(){
        this.isAlive = this.willSurvive;
        this.willSurvive = false;
    }

}
