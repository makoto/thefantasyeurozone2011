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
    new Radar(Raphael('aggregates', 300, 300)  , [
      {score:aggregate.gdpGrade,     label:"GDP\n #{aggregate.gdp} \n USD (Billion)"}
      {score:aggregate.deficitGrade, label:"Deficit / GDP\n #{aggregate.deficit}%"}
      {score:aggregate.yieldsGrade,   label:"10 yr bond yield\n #{aggregate.yields}%"}
      {score:aggregate.debtGrade,    label:"Debt / GDP\n #{aggregate.debt}%"}
      {score:aggregate.unemploymentGrade, label:"Unemployment\n #{aggregate.unemployment}%"}
    ], '', "Total Score\n #{total}", true ).draw()

    # Drawing Barchart
    $('#comparison').empty()
    (new Barchart()).draw()
    
window.Aggregates = Aggregates  