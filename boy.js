class boy{
    constructor(x,y){
    var options={
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,100,100,options);
    this.width=100;
    this.height=100;
    this.image=loadImage("boy.png")
    World.add(world,this.body);
    }
    display(){
        var ban=this.body.position;
        var angle=this.body.angle;
       
        imageMode(CENTER);
       image(this.image,ban.x,ban.y,this.width,this.height);
    
      
       
    }
    }