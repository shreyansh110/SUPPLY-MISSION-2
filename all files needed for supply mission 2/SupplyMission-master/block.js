class Block{
constructor(x,y,width,height){
var options ={

'restitution': 0.6,
'friction':0,
'density':1.0
}
this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width;
this.height=height;
World.add(world,this.body);



}


display(){
var pos =this.body.position
push();
translate(pos.x,pos.y)
rectMode(CENTER);
stroke("red");
fill (230,0,0);
rect(0, 0, this.width, this.height)
pop();




}











}