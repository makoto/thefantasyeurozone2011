class Country

  constructor: (array) ->
    [@name, @code, @isEuroZone, @deficit, @yield, @debt, @unemployment, @gdp, @deficitGrade, @debtGrade, @yieldGrade, @unemploymentGrade, @gdpGrade] = array     

  totalGrade: ->
    total = 0
    total+=g for g in [@deficitGrade, @yieldGrade, @debtGrade, @unemploymentGrade, @gdpGrade]
    total

  @all: (id) -> @records
  @add: (c) -> @records.push c
  @records: []
  @sortBy:(type) ->
    switch type
      when "current"
        @all().sort (a,b) -> b.isEuroZone.localeCompare(a.isEuroZone)
      when "current"
        @all().sort (a,b) -> b.isOriginalEuroZone.localeCompare(a.isOriginalEuroZone)
      when "current"
        @all().sort (a,b) -> b.isOriginalEuroZone.localeCompare(a.isOriginalEuroZone)
      when "deficit"
        @all().sort (a,b) -> parseFloat(a.deficit) - parseFloat(b.deficit)
      when "yield"
        @all().sort (a,b) -> parseFloat(a.yield) - parseFloat(b.yield)
      when "debt"
        @all().sort (a,b) -> parseFloat(a.debt) - parseFloat(b.debt)
      when "unemployment"
        @all().sort (a,b) -> parseFloat(a.unemployment) - parseFloat(b.unemployment)
      when "gdp"
        @all().sort (a,b) -> parseFloat(a.gdp) - parseFloat(b.gdp)
      when "best"
        @all().sort (a,b) -> a.totalGrade() - b.totalGrade()
    
  @filterBy:(type) ->
    switch type
      when "current"
        (c for c in @all() when c.isEuroZone == "y")
      when "original"
        (c for c in @all() when c.isOriginalEuroZone == "y")


window.Country = Country