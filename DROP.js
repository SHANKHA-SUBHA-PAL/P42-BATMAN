class Drop{

constructor(x,y,radius){

var options ={

isStatic:false,
friction:0.1

}

this.body = Bodies.circle(x,y,radius,options); 
this.radius = radius;
World.add(world, this.body); 
}
update(){

if(this.body.position.y > 800){
Matter.Body.setPosition(this.body,{x:random(0,480),y:random(0,100)});

}
}
display(){

    var pos = this.body.position;
    push()
    translate(pos.x,pos.y);
    ellipseMode(CENTER);
    fill("blue"); 
    ellipse(0,0,this.radius); 
    pop()

}
}