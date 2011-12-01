(function() {
  var AggregateView;
  AggregateView = (function() {
    function AggregateView(args) {
      var aggregate, attr, country, total, _i, _len, _ref;
      aggregate = {};
      _ref = Country.all();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        country = _ref[_i];
        if (country.isEuroZone === "y") {
          $("#countries span#" + country.code).addClass('active');
          for (attr in country) {
            if (typeof aggregate[attr] === "undefined") {
              aggregate[attr] = 0;
            }
            aggregate[attr] = aggregate[attr] + parseFloat(country[attr]);
          }
        }
      }
      for (attr in aggregate) {
        aggregate[attr] = Math.round(aggregate[attr] / Country.all().length);
      }
      total = aggregate.debtGrade + aggregate.deficitGrade + aggregate.yieldGrade + aggregate.unemploymentGrade + aggregate.gdpGrade;
      new Radar(Raphael('aggregates', 330, 330), [
        {
          score: aggregate.deficitGrade,
          label: "Deficit / GDP " + aggregate.deficit + "%"
        }, {
          score: aggregate.yieldGrade,
          label: "10 yr bond yield " + aggregate.yield + "%"
        }, {
          score: aggregate.debtGrade,
          label: "Debt / GDP " + aggregate.debt + "%"
        }, {
          score: aggregate.unemploymentGrade,
          label: "Enemployment " + aggregate.unemployment + "%"
        }, {
          score: aggregate.gdpGrade,
          label: "GDP " + aggregate.gdp + "%"
        }
      ], '', "Total Score: " + total).draw();
    }
    return AggregateView;
  })();
  window.AggregateView = AggregateView;
}).call(this);
