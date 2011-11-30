$(document).ready ->
  paper = Raphael(10, 10, 320, 200)  

  grades = []
  for i in [1..5]
    polygon = new Polygon(100, 100, 10 * i, 5);
    outline = paper.path polygon.path();
    outline.attr({stroke:'green'})
    grades.push polygon

  c = 0
  points = []
  for i in [5,4,3,2,1]
    x = grades[i - 1].x[c]
    y = grades[i - 1].y[c]
    points.push {x:x, y:y}
    c++

  p = "M#{points[0].x} #{points[0].y}"
  for i in [1..4]
    p = p + "L#{points[i].x} #{points[i].y}"
  p = p + "L#{points[0].x} #{points[0].y}"

  console.log p
  mark = paper.path p
  mark.attr({fill: "#fcb85c", stroke: "#fcb85c"})
