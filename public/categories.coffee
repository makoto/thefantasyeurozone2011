class Categories extends Spine.Controller
  tag: 'ul'
  events:
    "click li a": 'click'

  constructor: (args) ->
    super

  click: (event) ->
    type = event.target.id
    new Aggregates(type)
    new Countries(type)
window.Categories = Categories