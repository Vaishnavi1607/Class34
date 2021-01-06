class Pillar {
    constructor(x, y,width,height) {
      var options = {

         
          'friction':1.0,
          'density':0.5,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
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
      stroke(0);
      fill(255, 238, 117);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }