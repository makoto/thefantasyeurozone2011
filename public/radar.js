(function() {
  var Radar;
  Radar = (function() {
    function Radar(obj, array) {
      this.obj = obj;
      this.array = array;
    }
    Radar.prototype.draw = function() {
      this.drawLines();
      return this.drawPoints();
    };
    Radar.prototype.path = function(points) {
      var i, p;
      p = "M" + points[0].x + " " + points[0].y;
      for (i = 1; i <= 4; i++) {
        p = p + ("L" + points[i].x + " " + points[i].y);
      }
      return p = p + ("L" + points[0].x + " " + points[0].y);
    };
    Radar.prototype.drawLines = function() {
      var i, outline, polygon, _results;
      this.grades = [];
      _results = [];
      for (i = 1; i <= 5; i++) {
        polygon = new Polygon(100, 100, 10 * i, 5);
        outline = this.obj.path(polygon.path());
        outline.attr({
          stroke: 'green'
        });
        _results.push(this.grades.push(polygon));
      }
      return _results;
    };
    Radar.prototype.drawPoints = function() {
      var c, i, mark, points, x, y, _i, _len, _ref;
      c = 0;
      points = [];
      _ref = this.array;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        i = _ref[_i];
        x = this.grades[i - 1].x[c];
        y = this.grades[i - 1].y[c];
        points.push({
          x: x,
          y: y
        });
        c++;
      }
      mark = this.obj.path(this.path(points));
      return mark.attr({
        fill: "#fcb85c",
        stroke: "#fcb85c"
      });
    };
    return Radar;
  })();
  window.Radar = Radar;
}).call(this);
