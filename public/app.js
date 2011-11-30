(function() {
  $(document).ready(function() {
    var c, paper, polygon;
    paper = Raphael(10, 10, 320, 200);
    polygon = new Polygon(100, 100, 50, 5);
    return c = paper.path(polygon.path());
  });
}).call(this);
