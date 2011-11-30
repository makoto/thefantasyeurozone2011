class Radar

  constructor: (@obj, @array, @country) ->
    @grades = []
    @centerX = @obj.width / 2
    @centerY = @obj.height / 2
    @range = @obj.width / 15
  draw: ->
    @drawLines()
    @drawPoints()
    @drawText()
    @drawCountryCode()

  path: (points) ->
    p = "M#{points[0].x} #{points[0].y}"
    for i in [1..4]
      p = p + "L#{points[i].x} #{points[i].y}"
    p = p + "L#{points[0].x} #{points[0].y}"

  drawLines: ->
    for i in [1..5]
      polygon = new Polygon(@centerX, @centerY, @range * i, 5);
      outline = @obj.path polygon.path();
      outline.attr({stroke:'white'})
      @grades.push polygon
    
  drawPoints: ->
    c = 0
    points = []
    for i in @array
      x = @grades[i.score - 1].x[c]
      y = @grades[i.score - 1].y[c]
      points.push {x:x, y:y}
      c++

    mark = @obj.path @path points
    mark.attr({fill: "#C2B821", stroke: "#fcb85c"})

  drawText: ->
    textPolygon = new Polygon(@centerX, @centerY, @range * 6, 6);
    for a, i in @array
      text = @obj.text textPolygon.x[i], textPolygon.y[i], a.label

  drawCountryCode: ->
      @obj.text @centerX, @centerY, @country

window.Radar = Radar
    