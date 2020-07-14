class Batman{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image =loadImage("Sprites/batman.png")
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        fill(76,45,43);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
  }