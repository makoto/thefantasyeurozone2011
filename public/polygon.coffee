
class Polygon
  constructor: (@xCenter, @yCenter, @radius = 5, @num) ->
    @x = [];
    @y = [];
    @radiansOffset = @degreesToRadians(270);
    @lengthSide = 20;
    
  positions: ->
    for i in [0..4]
      angle = @radiansOffset + i * 2* Math.PI / 5
      @x[i] = @xCenter + @radius * Math.cos(angle)
      @y[i] = @yCenter + @radius * Math.sin(angle)
      console.log 'x', @x[i]
      console.log 'y', @y[i]
  
  draw: ->
    
  radiansToDegrees: (radians)->
      ( 360 * radians ) / ( 2 * Math.PI )

  degreesToRadians: (degree)-> 
      ( 2 * Math.PI * degree ) / 360


# polygon = new Polygon([],[], 50, 5);
# console.log polygon.positions()
window.Polygon = Polygon
