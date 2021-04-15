class Paper
    {
    constructor(x,y,radius)
        {
            var options =
            {
                isStatic:false,
                restitution:0.3,
                friction:0.5,
                density:1.0
            }

            this.body = Bodies.circle(x,y,70, options);
            this.image=loadImage("sprites/paper2.png");
            this.radius=radius;
            World.add(world,this.body)

        }
    display()
        {
            var pos=this.body.position
            imageMode(CENTER);
            image(this.image,pos.x,pos.y,40,50);

           // ellipse(pos.x,pos.y,this.radius)
        }
    }