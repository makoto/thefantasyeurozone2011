class Radar

  constructor: (@obj, @array, @country, @totalGrade, @aggregate = false) ->
    @grades = []
    @centerX = @obj.width / 2
    @centerY = @obj.height / 2
    @range = @obj.width / 25
    @fontFamily = 'Arial'
    if @aggregate
      @fontSize = 15
    else
      @fontSize = 10
  draw: ->
    @drawLines()
    @drawPoints()
    @drawText()
    @drawCountryCode()
    @drawTotalGrade()
    # @drawFlag()

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
    mark.attr({fill: "#16617F", stroke: "#16617F"})

  drawText: ->
    textPolygon = new Polygon(@centerX, @centerY, @range * 7, 6);
    textPolygon2 = new Polygon(@centerX, @centerY, @range * 9, 6);
    for a, i in @array
      if i == 1 || i == 4
        pol = textPolygon2
      else
        pol = textPolygon
        # body...
      text = @obj.text pol.x[i], pol.y[i], a.label
      text.attr({'font-size':"#{@fontSize}px"})

  drawCountryCode: ->
      @obj.text @centerX, @centerY, @country

  drawTotalGrade: ->
      text = @obj.text @centerX * 0.30 , @centerY * 0.30, @totalGrade
      text.attr({fill: "#FCDC28"})
      text.attr({'font-size':"#{@fontSize * 1.2}px"})

  drawFlag: ->
      flag = @obj.image 'http://www.bitvertiser.com/emos/country-flags/britain.png', @centerX * 0.27 , @centerY * 0.27, 20,20


window.Radar = Radar
    