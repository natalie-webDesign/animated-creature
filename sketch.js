let mouthx=200
let mouthy=200
let mouthw=15
let mouthh = 25

function setup() {
  createCanvas(400, 400);
}

function draw() {
  noStroke();
  background(7, 59, 133);
  fill(7, 34, 74);
  rect(0,300,400,100);
  
  //body
  fill(163, 41, 194);
  ellipse (200, 200, 100, 200);
  
  //feet
  fill(88, 186, 19);
  rect (215,290, 25, 15,10);
  rect (160,290, 25, 15,10);
  
  //lines
  stroke(0)
  line(200,100,200,50);
  line(235,120,275,75);
  line(165,120,125,75);
  
  //arms
  noStroke(0);
  fill(88,186,19);
  triangle(250,200,248,180,300,180);
  triangle(150,200,152,180,100,180);

  
  //hair
  fill(235, 127, 26);
  noStroke(0);
  ellipse(145,155,30);
  ellipse(155,135,25);
  ellipse(165,115,30);
  ellipse(180,105,25);
  ellipse(200,100,30);
  ellipse(220,105,25);
  ellipse(235,115,30);
  ellipse(245,135,25);
  ellipse(255,155,30);
  
  //moon
  stroke(245, 244, 213,80);
  strokeWeight(10);
  fill(227, 225, 170);
  ellipse(325,50,45);
  
  //box
  fill(130, 99, 53);
  noStroke();
  rect (40,310,70,40);
  stroke(77, 62, 40);
  strokeWeight(3);
  line(50,328,100,328);
  line(100,328,110,310);
  line(40,310,50,328);
  line(50,328,50,350);
  line(100,328,100,350);
  
  //pumpkin
  fill(240, 146, 24);
  noStroke(0); 
  ellipse(75,300, 50);
  fill(0);
  triangle(78,296,88,296,83,285);
  triangle(72,296,62,296,67,285);
  triangle(75,300,78,308,72,308);
  
  stroke(80, 166, 65);
  strokeWeight(6);
  line(75,275,75,270);
  
    //face
 stroke(0)
  strokeWeight(3)
  fill(0)
  ellipse(180,165,15,15);
  ellipse(220,165,15,15);
   stroke(242, 55, 41)
  ellipse(mouthx,mouthy,mouthw,mouthh);
  
  if (mouthw >500)
  {
    mouthw=15;
  }
  
  if (mouthh >833.33)
    {
      mouthh=25;
    }
  
mouthw = mouthw*1.03
 mouthh=mouthh*1.03
  
  
 
}