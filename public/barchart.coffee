class Barchart

  constructor: (gdp) ->
    @gdp = [
      ['EU',16250328209821.20]
      ['E Asia & Pacific',16219266890205.30]
      ['N America',16162456051801.20]
      ['USA',14582400000000.00]
      ['Euro',12174523489431.70]
      ['China',5878629246676.52]
      ['Japan',5497812568085.79]
      ['S America & Caribbean\n',5181851228628.24]
      ['Brazil',2087889553821.68]
      ['Arab World',1908954573177.62]
      ['India',1729010242153.78]
      ['Russian Fed',1479819314058.23]
      ['Korea Rep.',1014483158313.58]
      ['Switzerland',523772140978.64]
    ]

  draw: ()->
    # EU GDP Total
    gdp = @gdp
    r = Raphael('comparison', 500, 300)
    length = 200
    startY = 20
    w = 20
    x = 80
    fontSize = 15
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

    console.log('sum', sum)
    eurozone = r.text(x - 45, top, "Eurozone\n#{sum.toFixed(2)}")
    eurozone.attr({'font-size':"#{fontSize}px"})

    # Max the rest of the world GDP
    x = x + 50
    rtotal = r.rect(x, startY, w, length)
    rtotal.attr({stroke:'#E34528'})
    counter = 0
    textX = x + 120

    # Each country within the rest of the world GDP
    for c in gdp[1..(gdp.length - 1)]
      ratio = c[1] / parseFloat(gdp[0][1])
      top = (length * (1 - ratio)) + startY
      bottom =  length * ratio
      a = r.rect(x, top, w, bottom)  
      s = 1 * (ratio / 1.5)
      a.attr({stroke:'#E34528', fill:"hsb(0,#{s},1)"})
      if counter < 4 && counter != 0
        rest = r.text(textX, top, "#{gdp[counter][0]} #{@toBillion gdp[counter][1]}")
        rest.attr({'font-size':"#{fontSize}px"})
      counter++

    texts = []

    # To narrow. Concatinating
    for c in [5..13]
      texts.push "#{gdp[c][0]} #{@toBillion gdp[c][1]}"
    texts = texts.join('\n')
    rest = r.text(textX, length, texts)
    rest.attr({'font-size':"#{fontSize}px"})
    
  toBillion: (val) ->
    parseFloat( (val / 1000 / 1000 / 1000).toFixed(2))
    
window.Barchart = Barchart