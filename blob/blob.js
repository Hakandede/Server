
var yoff = 0.0;
var strok = 255;
function setup() {
  createCanvas(700,700);

}
 function mouseClicked()
 {
  if(strok === 255)
  {
    strok = 0;
  }
  else
  {strok = 255;}
 }

function draw() {
  background(50);
  translate(width / 2, height / 2);

  var radius = 300;
  beginShape();
  var xoff = 0;
  stroke(strok);
  for (var a = 0; a < 80; a += 0.1) {


    var offset = map(noise(xoff, yoff), 0, 1, -70, 70);
    var r = radius + offset;
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x, y);
    xoff += 0.06;
  }
  endShape();


  yoff += 0.004;
 }

 function scrolldown()
    {
      let w = window.innerWidth;
      let h = window.innerHeight;
        console.log("button");
        window.scrollBy(0, h);
    }
function scrolltop()
{
  window.scrollBy(0, -1999);
}