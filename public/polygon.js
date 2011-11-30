(function() {
  var Polygon;
  Polygon = (function() {
    function Polygon(xCenter, yCenter, radius, num) {
      this.xCenter = xCenter;
      this.yCenter = yCenter;
      this.radius = radius != null ? radius : 5;
      this.num = num;
      this.x = [];
      this.y = [];
      this.radiansOffset = this.degreesToRadians(270);
      this.lengthSide = 20;
    }
    Polygon.prototype.setPositions = function() {
      var angle, i, _results;
      _results = [];
      for (i = 0; i <= 4; i++) {
        angle = this.radiansOffset + i * 2 * Math.PI / 5;
        this.x[i] = this.xCenter + this.radius * Math.cos(angle);
        _results.push(this.y[i] = this.yCenter + this.radius * Math.sin(angle));
      }
      return _results;
    };
    Polygon.prototype.path = function() {
      var i, p;
      this.setPositions();
      p = "M" + this.x[0] + " " + this.y[0];
      for (i = 1; i <= 4; i++) {
        p = p + ("L" + this.x[i] + " " + this.y[i]);
      }
      return p = p + ("L" + this.x[0] + " " + this.y[0]);
    };
    Polygon.prototype.radiansToDegrees = function(radians) {
      return (360 * radians) / (2 * Math.PI);
    };
    Polygon.prototype.degreesToRadians = function(degree) {
      return (2 * Math.PI * degree) / 360;
    };
    return Polygon;
  })();
  window.Polygon = Polygon;
}).call(this);
