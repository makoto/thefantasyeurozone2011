class Barchart

  constructor: (gdp) ->
    @gdp = gdp

  draw: ()->
    gdp = @gdp
    r = Raphael('comparison', 200, 300)
    length = 200
    startY = 20
    w = 20
    eu = r.rect(30, 20, 20, length)
    eu.attr({ stroke:'#16617F', fill:'white'})

    sum = 0
    for a in Aggregate.all()
      sum+=a.gdp
    console.log('sum', sum)
    ratio = (sum / @toBillion gdp[0][1]).toFixed(2)
    console.log 'ratio', ratio
    top = (length * (1 - ratio)) + startY
    bottom =  length * ratio
    x = 30

    eurozone = r.rect(x, top, w, bottom)
    eurozone.attr({fill:'#16617F', stroke:'#16617F'})

    x = 80
    rtotal = r.rect(x, startY, w, length)
    rtotal.attr({stroke:'#E34528'})
    counter = 0
    textX = x + 70

    for c in gdp[1..(gdp.length - 1)]
      ratio = c[1] / parseFloat(gdp[0][1])
      top = (length * (1 - ratio)) + startY
      bottom =  length * ratio
      a = r.rect(x, top, w, bottom)  
      s = 1 * (ratio / 1.5)
      a.attr({stroke:'#E34528', fill:"hsb(0,#{s},1)"})
      r.text(textX, top, "#{gdp[counter][0]} #{@toBillion gdp[counter][1]}") if counter < 4 && counter != 0
      counter++

    texts = []

    # To narrow. Concatinating
    for c in [5..13]
      texts.push "#{gdp[c][0]} #{@toBillion gdp[c][1]}"
    texts = texts.join('\n')
    r.text(textX, length, texts)
    
  toBillion: (val) ->
    parseFloat( (val / 1000 / 1000 / 1000).toFixed(2))
    
window.Barchart = Barchart