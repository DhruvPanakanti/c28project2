class tree{
    constructor(x,y){
    var options={
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,300,300,options);
    this.width=300;
    this.height=300;
    this.image=loadImage("tree.png")
    World.add(world,this.body);
    }
    display(){
        var tan=this.body.position;
        var angle=this.body.angle;
        
        imageMode(CENTER);
       image(this.image,tan.x,tan.y,this.width,this.height);
    
      
       
    }
    }