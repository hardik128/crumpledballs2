class Paper {
    constructor(x,y,r){
      var options={
        isStatic:false,
         restitution:0,
         friction:0,
         density:1.2 
      }
      
     
      this.x=x;
      this.y=y;
      this.r=r*2.5;
      this.body=Bodies.circle(this.x,this.y,this.r,options)
      this.image=loadImage("sprites/paper.png");
      World.add(world,this.body)
      
    }
    display(){
        var paperpos=this.body.position
        push();
        translate(paperpos.x,paperpos.y)
        strokeWeight(0)
        fill(200)
        imageMode(CENTER);
        //ellipse(0,0,this.r)
        image(this.image, 0, 0, this.r*2.5,this.r*2.5);
        
        pop();    
    }
}