class Country

  constructor: (array) ->
    [@name, @code, @isEuroZone, @deficit, @yield, @debt, @unemployment, @gdp, @deficitGrade, @debtGrade, @yieldGrade, @unemploymentGrade, @gdpGrade] = array 

  totalGrade: ->
    total = 0
    total+=g for g in [@deficitGrade, @yieldGrade, @debtGrade, @unemploymentGrade, @gdpGrade]
    total
  total: ->

window.Country = Country