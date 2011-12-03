class Aggregates extends Spine.Controller

  constructor: () ->
    super
    # Filtering
    aggregate = {}
    for country in Aggregate.all()
      for attr of country
       aggregate[attr] = 0 if typeof(aggregate[attr]) == "undefined"
       aggregate[attr] = aggregate[attr] + parseFloat(country[attr] || 0)

    for attr of aggregate
      aggregate[attr] = Math.round (aggregate[attr] / (c for c in Aggregate.all()).length)

    total = aggregate.debtGrade + aggregate.deficitGrade + aggregate.yieldsGrade + aggregate.unemploymentGrade + aggregate.gdpGrade

    # Drawing Aggregates
    $("#aggregates").empty()
    new Radar(Raphael('aggregates', 370, 290)  , [
      {score:aggregate.gdpGrade,     label:"a. GDP (USD, bil)\n#{aggregate.gdp}(#{aggregate.gdpGrade})\n"}
      {score:aggregate.deficitGrade, label:"b. Surplus / Deficit\n#{aggregate.deficit}%(#{aggregate.deficitGrade})"}
      {score:aggregate.yieldsGrade,   label:"c. 10 yr bond yield\n #{aggregate.yields}%(#{aggregate.yieldsGrade})"}
      {score:aggregate.debtGrade,    label:"d. Debt\n #{aggregate.debt}%(#{aggregate.debtGrade})"}
      {score:aggregate.unemploymentGrade, label:"e. Unemployment\n #{aggregate.unemployment}%#{aggregate.unemploymentGrade}(#{aggregate.unemploymentGrade})"}
    ], '', "Total Score\n (#{total})", true ).draw()

    # Drawing Barchart
    $('#comparison').empty()
    (new Barchart()).draw()
    
window.Aggregates = Aggregates  