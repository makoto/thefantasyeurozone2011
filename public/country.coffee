class Country

  constructor: (array) ->
    [@name, @code, @isEuroZone, @deficit, @debt, @yield, @unemployment, @gdp, @deficitGrade, @debtGrade, @yieldGrade, @unemploymentGrade, @gdpGrade] = array 

  totalGrade: ->
    total = 0
    total+=g for g in [@deficitGrade, @debtGrade, @yieldGrade, @unemploymentGrade, @gdpGrade]
    total
  total: ->

window.Country = Country