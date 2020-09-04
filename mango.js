class mango{
constructor(x,y){
var options={
   isStatic:true
}
this.body=Bodies.rectangle(x,y,30,30,options);
this.width=30;
this.height=30;
this.image=loadImage("mango.png")
World.add(world,this.body);
}
display(){
    var man=this.body.position;
    var angle=this.body.angle;
  
    
    imageMode(CENTER);
   image(this.image,man.x,man.y,this.width,this.height);

  
   
}
}