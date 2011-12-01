class Categories extends Spine.Controller
  tag: 'ul'
  events:
    "click li a": 'click'

  constructor: (args) ->
    super

  click: (event) ->
    console.log event.target.id

window.Categories = Categories