class WALL{
    constructor(x, y, width, height) {
      var options = {
        //   'restitution':0.8,
        //   'friction':0.3,
        //   'density':1.0
              isStatic : true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
  