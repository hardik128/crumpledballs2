class Paper {
    constructor(x,y,r){
      var options={
        isStatic:false,
         restitution:0,
         friction:1,
         density:1.2 
      }
      
      this.body=Bodies.circle(x,y,r*3,options)
      this.x=x;
      this.y=y;
      this.r=r*3;
      this.image=loadImage("sprites/paper.png");
      World.add(world,this.body)
      
    }
    display(){
        var paperpos=this.body.position
        push();
        translate(paperpos.x,paperpos.y)
        strokeWeight(0)
        ellipseMode(CENTER)
        fill(200)
        imageMode(CENTER);
        ellipse(0,0,this.r)
        image(this.image, 0, 0, this.r*3,this.r*3);
        
        pop();    
    }
}