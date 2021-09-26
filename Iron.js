class Iron{

    constructor(x,y){
        var options ={
            'density':30,
            'friction':3.0,
            'restitution':0.8
        };
        this.body = Bodies.rectangle(x,y,100,50,options);
        this.width = 100;
        this.height = 50;
        World.add(world,this.body);
    }
display(){
    var pos = this.body.position;
    var angle = this.body.angle
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(2);
    stroke("white");
    fill("silver");
    rect(0,0,this.width,this.height);
    pop();
}
}