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
    Polygon.prototype.positions = function() {
      var angle, i, _results;
      _results = [];
      for (i = 0; i <= 4; i++) {
        angle = this.radiansOffset + i * 2 * Math.PI / 5;
        this.x[i] = this.xCenter + this.radius * Math.cos(angle);
        this.y[i] = this.yCenter + this.radius * Math.sin(angle);
        console.log('x', this.x[i]);
        _results.push(console.log('y', this.y[i]));
      }
      return _results;
    };
    Polygon.prototype.draw = function() {};
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
