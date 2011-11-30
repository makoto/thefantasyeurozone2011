class Radar

  constructor: (@obj, @array) ->
  draw: ->
    @drawLines()
    @drawPoints()

  path: (points) ->
    p = "M#{points[0].x} #{points[0].y}"
    for i in [1..4]
      p = p + "L#{points[i].x} #{points[i].y}"
    p = p + "L#{points[0].x} #{points[0].y}"

  drawLines: ->
    @grades = []
    for i in [1..5]
      polygon = new Polygon(100, 100, 10 * i, 5);
      outline = @obj.path polygon.path();
      outline.attr({stroke:'green'})
      @grades.push polygon
    
  drawPoints: ->
    c = 0
    points = []
    for i in @array
      x = @grades[i - 1].x[c]
      y = @grades[i - 1].y[c]
      points.push {x:x, y:y}
      c++

    mark = @obj.path @path points
    mark.attr({fill: "#fcb85c", stroke: "#fcb85c"})

window.Radar = Radar
    