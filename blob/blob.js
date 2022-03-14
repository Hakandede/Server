
var firstPage = document.getElementById('firstpage');
var yoff = 0.0;
var strok = 255;
var radius = 300;
var xmap = -70;
var ymap = 70;

function setup() {
  createCanvas(700,700);

}
 function mouseClicked()
 {
  if(strok == 255)
  {
    firstPage.style.visibility = "hidden";
    strok = 0;
    radius = 200;
    xmap = -240;
    ymap = 240;
  }
  else
  {
    firstPage.style.visibility = "visible";
    strok = 255;
    radius = 300;
    xmap = -70;
    ymap = 70;
  }
 }
  
function draw() {
  background(50);
  translate(width / 2, height / 2);


  beginShape();
  var xoff = 0;
  stroke(255);
  fill(strok);
  for (var a = 0; a < 80; a += 0.1) {


    var offset = map(noise(xoff, yoff), 0, 1, xmap, ymap);
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