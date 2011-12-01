(function() {
  var CountriesView;
  CountriesView = (function() {
    function CountriesView(args) {
      var c, countries, _i, _len;
      countries = Country.all().sort(function(a, b) {
        return b.isEuroZone.localeCompare(a.isEuroZone);
      });
      for (_i = 0, _len = countries.length; _i < _len; _i++) {
        c = countries[_i];
        $('#countries').append("<span title=" + c.name + " id='" + c.code + "'></span>");
        new Radar(Raphael(c.code, 100, 100), [
          {
            score: c.deficitGrade,
            label: c.deficit
          }, {
            score: c.yieldGrade,
            label: c.yield
          }, {
            score: c.debtGrade,
            label: c.debt
          }, {
            score: c.unemploymentGrade,
            label: c.unemployment
          }, {
            score: c.gdpGrade,
            label: c.gdp
          }
        ], c.code, c.totalGrade()).draw();
      }
    }
    return CountriesView;
  })();
  window.CountriesView = CountriesView;
}).call(this);
