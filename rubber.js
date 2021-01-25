class Rubber {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':3.0,
          'density':2.0
      }

      ellipseMode(RADIUS);
      ellipse(rubber.position.x, rubber.position.y, 50, 50);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      stroke("black");
      fill("darkBlue");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };