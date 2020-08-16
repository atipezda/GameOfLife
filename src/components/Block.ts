class Block{
    x: number;
    y: number;
    size: number;
    isAlive: boolean = false;

    constructor(x: number, y: number, size: number, isAlive: boolean) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.isAlive = isAlive;
    }

    draw(){
        if(this.isAlive){
            fill('black');
        }else{
            fill('white');
        }
        square(this.x,this.y,this.size);
    }

}
