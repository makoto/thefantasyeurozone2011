class Barchart

  constructor: (gdp) ->
    @gdp = [
      ['EU',16250328209821.20, "r"]
      ['E Asia & Pacific',16219266890205.30, "r"]
      ['N America',16162456051801.20, "r"]
      ['USA',14582400000000.00, "c"]
      ['China',5878629246676.52, "c"]
      ['Japan',5497812568085.79, "c"]
      ['S America & Caribbean',5181851228628.24, "r"]
      ['Brazil',2087889553821.68, "c"]
      ['Arab World',1908954573177.62, "r"]
      ['India',1729010242153.78, "c"]
      ['Russia',1479819314058.23, "c"]
      ['S Korea',1014483158313.58, "c"]
      ['Switzerland',523772140978.64, "c"]
    ]

  draw: ()->
    # EU GDP Total
    gdp = @gdp
    r = Raphael('comparison', 500, 290)
    length = 200
    startY = 20
    w = 20
    x = 80
    fontSize = 15 * 0.9
    eu = r.rect(x, startY, w, length)
    eu.attr({ stroke:'#16617F', fill:'white'})
    # Eurozone GDP Total
    sum = 0
    for a in Aggregate.all()
      sum+=a.gdp
    ratio = (sum / @toBillion gdp[0][1]).toFixed(2)
    console.log 'ratio', ratio
    top = (length * (1 - ratio)) + startY
    bottom =  length * ratio
    eurozone = r.rect(x, top, w, bottom)
    eurozone.attr({fill:'#16617F', stroke:'#16617F'})
    eurozone.attr({'font-size':"#{fontSize}px"})

    eurozone = r.text(x - 45, top, "Eurozone\n#{sum.toFixed(2)}")
    eurozone.attr({'font-size':"#{fontSize}px"})

    # Max the rest of the world GDP
    x = x + 250
    rtotal = r.rect(x, startY, w, length)
    rtotal.attr({stroke:'#E34528'})
    counter = 1
    
    prevPos = 0
    # Each country within the rest of the world GDP
    for c in gdp[1..(gdp.length - 1)]
      ratio = c[1] / parseFloat(gdp[0][1])
      top = (length * (1 - ratio)) + startY
      bottom =  length * ratio
      a = r.rect(x, top, w, bottom)  
      s = 1 * (ratio / 1.5)
      a.attr({stroke:'#E34528', fill:"hsb(0,#{s},1)"})
      if c[2] == "c"
        textX = x + 30
        anchor = "start"
      else
        textX = x - 10
        anchor = "end"
      console.log("ddd", c[0], c[2], textX)

      # if counter < 4 && counter != 0
      
      currentPos = top
      console.log('p', prevPos, 'c', currentPos)
      if currentPos - prevPos < 10
        console.log('overrapping')
        currentPos = prevPos + 15
      else
        console.log('not overrapping')
      
      rest = r.text(textX, currentPos, "#{gdp[counter][0]} #{@toBillion gdp[counter][1]}")
      rest.attr({'font-size':"#{fontSize}px", 'text-anchor':anchor})
      counter++
      prevPos = currentPos

    texts = []

    # To narrow. Concatinating
    # for c in [5..13]
    #   texts.push "#{gdp[c][0]} #{@toBillion gdp[c][1]}"
    # texts = texts.join('\n')
    # textX = x + 120
    # rest = r.text(textX, length, texts)
    # rest.attr({'font-size':"#{fontSize}px"})
    
  toBillion: (val) ->
    parseFloat( (val / 1000 / 1000 / 1000).toFixed(2))
    
window.Barchart = Barchart