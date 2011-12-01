class Aggregates extends Spine.Controller

  constructor: (args) ->
    super
    # Filtering
    aggregate = {}
    for country in Country.filterBy("current")
      $("#countries span##{country.code}").addClass('active')
      for attr of country
       aggregate[attr] = 0 if typeof(aggregate[attr]) == "undefined"
       aggregate[attr] = aggregate[attr] + parseFloat(country[attr])

    for attr of aggregate
      aggregate[attr] = Math.round (aggregate[attr] / Country.all().length)

    total = aggregate.debtGrade + aggregate.deficitGrade + aggregate.yieldGrade + aggregate.unemploymentGrade + aggregate.gdpGrade

    # Drawing Aggregates
    new Radar(Raphael('aggregates', 330, 330)  , [
      {score:aggregate.deficitGrade, label:"Deficit / GDP #{aggregate.deficit}%"},
      {score:aggregate.yieldGrade,   label:"10 yr bond yield #{aggregate.yield}%"},
      {score:aggregate.debtGrade,    label:"Debt / GDP #{aggregate.debt}%"},
      {score:aggregate.unemploymentGrade, label:"Enemployment #{aggregate.unemployment}%"},
      {score:aggregate.gdpGrade,     label:"GDP #{aggregate.gdp}%"}
    ], '', "Total Score: #{total}" ).draw()

window.Aggregates = Aggregates  