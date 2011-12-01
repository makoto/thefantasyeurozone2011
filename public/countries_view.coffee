class CountriesView

  constructor: (args) ->
    # Sort
    countries = Country.all().sort (a,b) -> b.isEuroZone.localeCompare(a.isEuroZone)

    # Drawining Each Country
    for c in countries
      # a:visited turns svg into black. Happens only on Chrome.
      # https://groups.google.com/a/chromium.org/group/chromium-bugs/browse_thread/thread/601e8ebafabf7492/d72a235e2cc41f3e?lnk=raot
      $('#countries').append("<span title=#{c.name} id='#{c.code}'></span>")

      new Radar(
        Raphael(c.code, 100, 100)
        [
          {score:c.deficitGrade, label:c.deficit},
          {score:c.yieldGrade,   label:c.yield},
          {score:c.debtGrade,    label:c.debt},
          {score:c.unemploymentGrade, label:c.unemployment},
          {score:c.gdpGrade, label:c.gdp}
        ]
        c.code
        c.totalGrade()
      ).draw()

window.CountriesView = CountriesView  