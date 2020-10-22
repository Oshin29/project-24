class Dustbin_1{
    constructor(x,y,width,height){
        var option = {
            restitution: 0.3,
            friction:1.5,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.hight = height;
          World.add(world,this.body);
    }

  display(){
    var pos = this.body.position;
    rectMode(CENTER);
    rect(0,0,this.width,this.hight);
  }
    
}