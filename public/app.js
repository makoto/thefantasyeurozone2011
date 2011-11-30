(function() {
  $(document).ready(function() {
    var c, paper, polygon;
    paper = Raphael(10, 10, 320, 200);
    c = paper.path("M10 10L90 90 L90 80 L70 60");
    polygon = new Polygon(100, 100, 50, 5);
    return console.log(polygon.positions());
  });
}).call(this);
