$(document).ready ->
  paper = Raphael(10, 10, 320, 200)
  c = paper.path("M10 10L90 90 L90 80 L70 60")
  
  polygon = new Polygon(100, 100, 50, 5);
  console.log polygon.positions()
