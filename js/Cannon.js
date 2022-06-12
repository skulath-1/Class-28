class Cannon{

  //Properties
  constructor(x,y,w,h,angle){

      this.x=x;
      this.y=y;
      this.w=w;
      this.h=h;
      this.angle=angle;

  }

  //function
  display(){

    if(keyIsDown(RIGHT_ARROW)&&this.angle<0.35){

      this.angle = this.angle+0.02

    }

    if (keyIsDown(LEFT_ARROW)&&this.angle>-1.45){

      this.angle = this.angle-0.02
    }

      fill("#676e6a");

      push();

      translate(this.x,this.y);
      rotate(this.angle); //45
      rect(-10,-20,this.w,this.h);

      pop();

      arc(this.x-30,this.y+90,140,200,PI,PI*2);

      noFill();
      
  }


}