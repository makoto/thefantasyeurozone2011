(function() {
  var Radar;
  Radar = (function() {
    function Radar(obj, array, country, totalGrade) {
      this.obj = obj;
      this.array = array;
      this.country = country;
      this.totalGrade = totalGrade;
      this.grades = [];
      this.centerX = this.obj.width / 2;
      this.centerY = this.obj.height / 2;
      this.range = this.obj.width / 17;
    }
    Radar.prototype.draw = function() {
      this.drawLines();
      this.drawPoints();
      this.drawText();
      this.drawCountryCode();
      return this.drawTotalGrade();
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
      _results = [];
      for (i = 1; i <= 5; i++) {
        polygon = new Polygon(this.centerX, this.centerY, this.range * i, 5);
        outline = this.obj.path(polygon.path());
        outline.attr({
          stroke: 'white'
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
        x = this.grades[i.score - 1].x[c];
        y = this.grades[i.score - 1].y[c];
        points.push({
          x: x,
          y: y
        });
        c++;
      }
      mark = this.obj.path(this.path(points));
      return mark.attr({
        fill: "#E34528",
        stroke: "#E34528"
      });
    };
    Radar.prototype.drawText = function() {
      var a, i, text, textPolygon, _len, _ref, _results;
      textPolygon = new Polygon(this.centerX, this.centerY, this.range * 6, 6);
      _ref = this.array;
      _results = [];
      for (i = 0, _len = _ref.length; i < _len; i++) {
        a = _ref[i];
        _results.push(text = this.obj.text(textPolygon.x[i], textPolygon.y[i], a.label));
      }
      return _results;
    };
    Radar.prototype.drawCountryCode = function() {
      return this.obj.text(this.centerX, this.centerY, this.country);
    };
    Radar.prototype.drawTotalGrade = function() {
      var text;
      text = this.obj.text(this.centerX * 1.70, this.centerY * 0.30, this.totalGrade);
      return text.attr({
        fill: "#E34528"
      });
    };
    Radar.prototype.drawFlag = function() {
      var flag;
      return flag = this.obj.image('http://www.bitvertiser.com/emos/country-flags/britain.png', this.centerX * 0.27, this.centerY * 0.27, 20, 20);
    };
    return Radar;
  })();
  window.Radar = Radar;
}).call(this);
