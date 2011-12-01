class Categories extends Spine.Controller
  tag: 'ul'
  events:
    "click li a": 'click'

  constructor: (args) ->
    super

  click: (event) ->
    type = event.target.id
    Aggregate.load Country.filterBy(type)
    new Aggregates(type)
    new Countries(el:$('#countries'), type:type)
window.Categories = Categories