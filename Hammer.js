class Hammer{

  constructor(x,y){
      var options ={
          'density':4,
          'friction':1.0,
          'restitution':0.5
      };
      this.body = Bodies.rectangle(x,y,150,50,options);
      World.add(world,this.body);
      this.width = 150;
      this.height = 50;
  }
display(){
  var pos = this.body.position;
  pos.x = mouseX;
  pos.y = mouseY;
  var angle = this.body.angle
  push();
  translate(pos.x,pos.y);
  rotate(angle);
  rectMode(CENTER);
  strokeWeight(2);
  stroke("white");
  fill("red");
  rect(0,0,this.width,this.height);
  pop();
}
}
