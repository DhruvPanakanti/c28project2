class stone{
        constructor(x,y){
            var options={
               isStatic:false,
               restitution:0,
               friction:1,
               density:1.2
        
            }
            this.body=Bodies.circle(x,y,30,options);
            this.radius=30;
            this.image=loadImage("stone.png")
            World.add(world,this.body);
        }
        display(){
            var ban=this.body.position; 
            var angle=this.body.angle;
            push()
            translate(ban.x,ban.y);
            rotate(angle);
            imageMode(RADIUS);
            image(this.image,0,0,this.radius,this.radius);
    
          
            pop ();
        }
        
        }
    
    
