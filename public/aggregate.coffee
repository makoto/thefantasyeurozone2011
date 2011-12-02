class Aggregate

  constructor: (args) ->
    # body...
  
  @load: (collection)-> @records = collection
  @addOrDelete:(country) ->
    if (c for c in @records when c.code == country.code).length !=0
      @records = (c for c in @records when c.code != country.code)
    else
      @records.push country

  @all: -> @records
  
  @records:[]

window.Aggregate = Aggregate