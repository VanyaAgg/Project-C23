class Box {
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height);
        this.w = width;
        this.h = height;
        World.add (world,this.body);
console.log(this.body);
    }
    display(){
        var pos = this.body.position;
        fill("red");
        rect(pos.x,pos.y,this.w,this.h);
        

    }
}