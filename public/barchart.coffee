class Barchart

  constructor: (gdp) ->
    @gdp = gdp

  draw: ()->
    gdp = @gdp
    r = Raphael('comparison', 200, 300)
    eu = r.rect(30, 20, 20, 200)
    eu.attr({ stroke:'#16617F', fill:'white'})
    eurozone = r.rect(30, 120, 20, 100)
    eurozone.attr({fill:'#16617F', stroke:'#16617F'})
    [x, startY, w, h] = [80, 20, 20, 200]
    rtotal = r.rect(x, startY, w, h)  
    rtotal.attr({stroke:'#E34528'})
    length = h # 200 - 20 = 180
    counter = 0
    console.log('length', @gdp.length)
    textX = x + 70
    
    for c in gdp[1..(gdp.length - 1)]
      console.log('c', c, counter)
      ratio = c[1] / parseFloat(gdp[0][1])
      top = (length * (1 - ratio)) + startY
      bottom =  length * ratio
      a = r.rect(x, top, w, bottom)  
      s = 1 * ((1 - (ratio / 1.5)) )
      a.attr({stroke:'#E34528', fill:"hsb(0,#{s},1)"})
      r.text(textX, top, "#{gdp[counter][0]} #{@toBillion gdp[counter][1]}") if counter < 4 && counter != 0
      counter++

    texts = []

    # To narrow. Concatinating
    for c in [5..13]
      texts.push "#{gdp[c][0]} #{@toBillion gdp[c][1]}"
    texts = texts.join('\n')
    r.text(textX, 200, texts)
    
  toBillion: (val) ->
    parseFloat( (val / 1000 / 1000 / 1000).toFixed(2))
    
window.Barchart = Barchart