(function() {
  $(document).ready(function() {
    var c, grades, i, mark, outline, p, paper, points, polygon, x, y, _i, _len, _ref;
    paper = Raphael(10, 10, 320, 200);
    grades = [];
    for (i = 1; i <= 5; i++) {
      polygon = new Polygon(100, 100, 10 * i, 5);
      outline = paper.path(polygon.path());
      outline.attr({
        stroke: 'green'
      });
      grades.push(polygon);
    }
    c = 0;
    points = [];
    _ref = [5, 4, 3, 2, 1];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      i = _ref[_i];
      x = grades[i - 1].x[c];
      y = grades[i - 1].y[c];
      points.push({
        x: x,
        y: y
      });
      c++;
    }
    p = "M" + points[0].x + " " + points[0].y;
    for (i = 1; i <= 4; i++) {
      p = p + ("L" + points[i].x + " " + points[i].y);
    }
    p = p + ("L" + points[0].x + " " + points[0].y);
    console.log(p);
    mark = paper.path(p);
    return mark.attr({
      fill: "#fcb85c",
      stroke: "#fcb85c"
    });
  });
}).call(this);
