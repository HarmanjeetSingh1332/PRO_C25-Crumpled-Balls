class Paper {
	constructor(x, y) {
		var opt = {
            isStatic:false,
			'restitution':0.3,
			'friction':0,
			'density':0.9
		}
		this.body = Bodies.circle(x, y, 30, opt);
		this.radius = 30;
        this.image=loadImage("paper.png");

		World.add(world,this.body);
	}
	display(){
		var rubpos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(rubpos.x,rubpos.y);
		rotate(angle);
		imageMode(RADIUS);
        image(this.image, 0, 0, 40,40);
		pop();
	}
}