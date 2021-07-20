class slingShot {

constructor(bodyA,pointB){
var options = {

    bodyA: bodyA,
    pointB: pointB,
    stiffness: 0.04,
    length: 5

}
this.pointB = pointB;

this.sling=Constraint.create(options);

World.add(world, this.sling);



}

display()
{
if (this.sling.bodyA){
var posA = this.sling.bodyA.position;
var posB = this.pointB;
push();
strokeWeight(10);
line(posA.x, posA.y, posB.x-50, posB.y);
pop();
}
}

fly()
{
this.sling.bodyA = null;
}
}
