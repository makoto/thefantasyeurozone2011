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

    total = aggregate.debtGrade + aggregate.deficitGrade + aggregate.yieldGrade + aggregate.unemploymentGrade + aggregate.gdpGrade

    # Drawing Aggregates
    $("#aggregates").empty()
    new Radar(Raphael('aggregates', 330, 330)  , [
      {score:aggregate.deficitGrade, label:"Deficit / GDP\n #{aggregate.deficit}%"},
      {score:aggregate.yieldGrade,   label:"10 yr bond yield\n #{aggregate.yield}%"},
      {score:aggregate.debtGrade,    label:"Debt / GDP\n #{aggregate.debt}%"},
      {score:aggregate.unemploymentGrade, label:"Enemployment\n #{aggregate.unemployment}%"},
      {score:aggregate.gdpGrade,     label:"GDP\n #{aggregate.gdp}%"}
    ], '', "Total Score\n #{total}", true ).draw()

window.Aggregates = Aggregates  