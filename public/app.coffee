$(document).ready ->
  paper = Raphael(10, 10, 320, 200)  
  polygon = new Polygon(100, 100, 50, 5);

  c = paper.path polygon.path();
