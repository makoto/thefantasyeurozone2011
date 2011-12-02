class Categories extends Spine.Controller
  tag: 'ul'
  events:
    "click li a": 'click'

  constructor: (args) ->
    super

  click: (event) ->
    type = event.target.id
    Aggregate.load Country.filterBy(type)
    new Aggregates()
    window.counties.refresh()

    $('.categories a').removeClass('selected')
    $(event.target).addClass('selected')

window.Categories = Categories