function setup() {
  // put setup code here
noCursor();
createCanvas(1100, 600);
background('#090024');
 

}

function draw() {
  // put drawing code here

stroke('#fff398');
  strokeWeight('12'); //sun code
  fill('#ff7e00');  
  ellipse(350,300,370,390);
  
  fill('#878787'); //moon code
  ellipse(600,425,400,430);
  
  stroke('white'); //this is the earth
  strokeWeight('3');
  fill('#22dd7d');
  ellipse(900,600,500,480);

  stroke('#fefff1'); //this is the part of the code that makes the stars
  strokeWeight('1');
  point(mouseX,mouseY,20,20);

}

