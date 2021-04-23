class Monster {
  constructor(x,y,width,height)
	{
		var options = { 
			density:5,
	  restitution: 0.5, 
      frictionAir:0
    };
		this.body=Bodies.rectangle(x,y,width,height,options);
		this.width=width;
		this.height=height;
		this.image=loadImage("images/monster1.png");
		World.add(world, this.body);

	}
	display()
	{
			
			
			push();
			translate(this.body.position.x,this.body.position.y);
			imageMode(CENTER);
			image(this.image, 0,0,this.width, this.height)
			pop();
			
	}
}