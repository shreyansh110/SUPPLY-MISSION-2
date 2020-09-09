class Block{
constructor(x,y){
var options ={

'restitution': 0.3,
'friction':0,
'density':1.0
}
this.body=Bodies.rectangle(x,y,40,10,options)
this.width=40;
this.height=10;
World.add(world,this.body);



}


display(){
push();
rectMode(CENTER);
stroke("red");
fill(225);
rect(0, 0, this.width, this.height)
pop();




}











}