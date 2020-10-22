class Dustbin_1{
    constructor(x,y){
        this.bottomBody=Bodies.rectangle(x,y, 200, 20, {isStatic:true});
		this.leftWallBody=Bodies.rectangle(x-100,y-100,20,200 {isStatic:true});
		this.rightWallBody=Bodies.rectangle(x+100, y-100, 20, 200, {isStatic:true});
        this.wallthickness=20;
        this.dustbinHeight=200;
        this.dustbinWidth=200;
        World.add(world,this.bottomBody);
        World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);
    }

  display(){
             var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push();
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER);
			fill(255);
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop();

			push();
			translate(posRight.x, posRight.y);
			rectMode(CENTER);
			fill(255);
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop();

			push();
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER);
			fill(255)
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop();
			
	}

}
    
}
