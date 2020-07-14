class Drop{
    constructor(x,y){
      var  options={
          'restitution':2
        }
    
      this.radius = random(1,3);
      this.body = Bodies.circle(x,y,this.radius,options);
      this.xposition = x 
      World.add(world,this.body);
    }
     display(){
         fill("blue");
         ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
     }
     updateFalling(){
         if(this.body.position.y>height){
            //Matter.Body.setPosition(this.body,{x:this.body.position.x,y:0});
            this.body.position.y=0;
            this.body.position.x=this.xposition

         }
     }

}