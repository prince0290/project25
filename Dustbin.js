class Dustbin {
    constructor(x,y,width,height){
        var options = {
            isStatic : false ,
            friction : 0.5 ,
            restitution : 0.5 ,
            density : 20
        };

        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height; 
        this.image=loadImage("dustbingreen.png");
        
    }

    display(){
        var pos  = this.body.position;
        rectMode(CENTER);
        fill ("white");
        imageMode(CENTER);
        image(this.image, 589.5,580,170,200);
        rect (pos.x,pos.y,this.width,this.height)
    }

}