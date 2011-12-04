class Countries extends Spine.Controller
  events:
    "click .country": 'click'

  constructor: (opts) ->
    super

  refresh: (type ="current") ->
    # Sort
    countries = Country.sortBy(type)
    $('#countries').empty()
    # Drawining Each Country
    for c in countries
      # a:visited turns svg into black. Happens only on Chrome.
      # https://groups.google.com/a/chromium.org/group/chromium-bugs/browse_thread/thread/601e8ebafabf7492/d72a235e2cc41f3e?lnk=raot
      $('#countries').append("<span title='#{c.name}' id='#{c.code}' class='country'></span>")

      new Radar(
        Raphael(c.code, 110, 80)
        [
          {score:c.gdpGrade, label:c.gdp}
          {score:c.deficitGrade, label:c.deficit}
          {score:c.yieldsGrade,   label:c.yields}
          {score:c.debtGrade,    label:c.debt}
          {score:c.unemploymentGrade, label:c.unemployment}
        ]
        c.totalGrade()
        c.code
        false
        18
      ).draw()
    for country in Country.filterBy(type)
      $("#countries span##{country.code}").addClass('active')

  click:(event) -> 
    country = $(event.target).parents('.country')[0]
    # 
    #
    # Fade in/out countries
    $(country).toggleClass('active')
    # Regenerate aggregates
    Aggregate.addOrDelete Country.findByCode(country.id)
    new Aggregates()


window.Countries = Countries 