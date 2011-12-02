class Country

  constructor: (opts) ->
    for key,val of opts
     @[key] = val

    @gdp =  parseFloat( (@gdp / 1000 / 1000).toFixed(2))

  totalGrade: ->
    total = 0
    total+=g for g in [@deficitGrade, @yieldsGrade, @debtGrade, @unemploymentGrade, @gdpGrade]
    total

  @all: (id) -> @records
  @findByCode:(code) -> (c for c in @all() when c.code == code)[0]
  @add: (c) -> @records.push c
  @records: []
  @sortBy:(type) ->
    switch type
      when "current"
        @all().sort (a,b) -> b.isEuroZone.localeCompare(a.isEuroZone)
      when "original"
        @all().sort (a,b) -> b.isOriginalEuroZone.localeCompare(a.isOriginalEuroZone)
      when "deficit"
        @all().sort (a,b) -> parseFloat(a.deficit) - parseFloat(b.deficit)
      when "yield"
        @all().sort (a,b) -> parseFloat(a.yields) - parseFloat(b.yields)
      when "debt"
        @all().sort (a,b) -> parseFloat(a.debt) - parseFloat(b.debt)
      when "unemployment"
        @all().sort (a,b) -> parseFloat(a.unemployment) - parseFloat(b.unemployment)
      when "gdp"
        @all().sort (a,b) -> parseFloat(a.gdp) - parseFloat(b.gdp)
      when "best"
        @all().sort (a,b) -> b.totalGrade() - a.totalGrade()
      when "worst"
        @all().sort (a,b) -> a.totalGrade() - b.totalGrade()
      when "all"
        @all()

  @filterBy:(type) ->
    switch type
      when "current"
        (c for c in @all() when c.isEuroZone == "y")
      when "original"
        (c for c in @all() when c.isOriginalEuroZone == "y")
      when "all"
        @all()
      else
        @sortBy(type)[0..10]

window.Country = Country