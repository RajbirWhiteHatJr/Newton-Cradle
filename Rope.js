class Rope {

    constructor(body1,point2){
    
    var options ={
    
        bodyA: body1,
        pointB: point2,
        length:9,
        stiffness:0.05,
        
    
         }
    
         this.chain= Constraint.create(options);
         World.add(world,this.chain);
    
    }
    
    display(){
    var posA = this.chain.bodyA.position
    var posB = this.chain.pointB
    strokeWeight(5);
    line(posA.x,posA.y,posB.x,posB.y)
    
    
    }
    
    
    }