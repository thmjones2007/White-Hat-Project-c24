class Rubber{

    constructor(x,y,r){
        var options ={
            'density':1,
            'friction':5.0,
            'restitution':0.3
        };
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);
    }
display(){
    var pos = this.body.position;
    //var angle = this.body.angle
    push();
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);
    strokeWeight(2);
    stroke("white");
    fill("blue");
    ellipse(0,0,this.r,this.r);
    pop();

}
}