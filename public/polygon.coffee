# Logic borrowed from http://www.codeguru.com/forum/showthread.php?t=511529
class Polygon
  constructor: (@xCenter, @yCenter, @radius = 5, @num) ->
    @x = [];
    @y = [];
    @radiansOffset = @degreesToRadians(270);
    @lengthSide = 20;
    @setPositions()
    
  setPositions: ->
    for i in [0..4]
      angle = @radiansOffset + i * 2* Math.PI / 5
      @x[i] = @xCenter + @radius * Math.cos(angle)
      @y[i] = @yCenter + @radius * Math.sin(angle)

  path: ->
    p = "M#{@x[0]} #{@y[0]}"
    for i in [1..4]
      p = p + "L#{@x[i]} #{@y[i]}"
    p = p + "L#{@x[0]} #{@y[0]}"
    
  radiansToDegrees: (radians)->
      ( 360 * radians ) / ( 2 * Math.PI )

  degreesToRadians: (degree)-> 
      ( 2 * Math.PI * degree ) / 360

window.Polygon = Polygon
