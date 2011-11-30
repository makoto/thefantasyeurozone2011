(function() {
  $(document).ready(function() {
    var aggregate, attr, c, countries, country, i, total, _i, _j, _len, _len2, _ref;
    countries = [];
    _ref = [["Belgium", "BE", "y", "-4.1", "4.2", "98.4", "6.7", "17.4", 4, 3, 1, 4, 2], ["Bulgaria", "BG", "n", "-3.1", "5.26", "15.2", "11.9", "26.8", 4, 2, 5, 2, 4], ["Czech Republic", "CZ", "n", "-4.8", "3.14", "40.1", "6.6", "18.8", 3, 3, 4, 4, 2], ["Denmark", "DK", "n", "-2.6", "2.23", "47.5", "7.1", "13.9", 4, 4, 3, 4, 1], ["Germany", "DE", "y", "-4.3", "2", "81.1", "5.8", "9.2", 3, 5, 2, 4, 1], ["Estonia", "EE", "y", "0.2", null, "6.2", "12.8", "21.8", 5, 5, 5, 2, 3], ["Ireland", "IE", "y", "-31.3", "8.1", "104.6", "14.2", "29.5", 1, 1, 1, 1, 4], ["Greece", "GR", "y", "-10.6", "18.04", "151.9", "17.6", "43.4", 1, 1, 1, 1, 5], ["Spain", "ES", "y", "-9.3", "5.26", "65.2", "22.6", "48", 1, 2, 3, 1, 5], ["France", "FR", "y", "-7.1", "2.99", "86.1", "9.9", "24", 2, 3, 1, 2, 4], ["Italy", "IT", "y", "-4.6", "5.97", "121.4", "8.3", "29.3", 3, 2, 1, 3, 4], ["Cyprus", "CY", "y", "-5.3", "7", "66.8", "7.8", "22.6", 3, 1, 2, 3, 3], ["Latvia", "LV", "n", "-8.3", "5.62", "45.2", "16.1", "29.7", 1, 2, 3, 1, 4], ["Lithuania", "LT", "n", "-7", "5.05", "37.9", "15.5", "32.7", 2, 3, 4, 1, 5], ["Luxembourg", "LU", "y", "-1.1", "2.37", "18.7", "4.8", "14.7", 5, 4, 5, 5, 2], ["Hungary", "HU", "n", "-4.2", "7.88", "76.8", "9.9", "23.1", 4, 1, 2, 2, 3], ["Malta", "MT", "y", "-3.6", "4.26", "71.6", "6.6", "15.3", 4, 3, 2, 4, 2], ["Netherlands", "NL", "y", "-5.1", "2.46", "63.8", "4.5", "8", 3, 4, 3, 5, 1], ["Austria", "AT", "y", "-4.4", "2.92", "72.5", "3.9", "7.1", 3, 4, 2, 5, 1], ["Poland", "PL", "n", "-7.8", "5.71", "56", "9.4", "23.8", 2, 2, 3, 2, 3], ["Portugal", "PT", "y", "-9.8", "11.72", "106.3", "12.5", "27.1", 1, 1, 1, 2, 4], ["Romania", "RO", "n", "-6.9", "7.48", "34.3", "7.5", "22.8", 2, 1, 5, 3, 3], ["Slovenia", "SI", "y", "-5.8", "5.16", "44.4", "8", "13.4", 2, 2, 4, 3, 1], ["Slovakia", "SK", "y", "-7.7", "4.33", "42.5", "13.5", "30.7", 2, 3, 4, 1, 5], ["Finland", "FI", "y", "-2.5", "2.51", "45.3", "7.8", "20.4", 4, 4, 3, 3, 2], ["Sweden", "SE", "n", "0.2", "1.9", "36.8", "7.2", "22.1", 5, 5, 4, 4, 3], ["United Kingdom", "GB", "n", "-10.3", "2.52", "80.1", "8.1", "21.2", 1, 4, 2, 3, 2], ["Norway", "NO", "n", "10.6", null, "42.3", "3.2", "8.2", 5, 5, 4, 5, 1]];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      i = _ref[_i];
      c = new Country(i);
      $('#countries').append("<span title=" + c.name + " id='" + c.code + "'></span>");
      new Radar(Raphael(c.code, 100, 100), [
        {
          score: c.deficitGrade,
          label: c.deficit
        }, {
          score: c.debtGrade,
          label: c.debt
        }, {
          score: c.yieldGrade,
          label: c.yield
        }, {
          score: c.unemploymentGrade,
          label: c.unemployment
        }, {
          score: c.gdpGrade,
          label: c.gdp
        }
      ], c.code, c.totalGrade()).draw();
      countries.push(c);
    }
    aggregate = {};
    for (_j = 0, _len2 = countries.length; _j < _len2; _j++) {
      country = countries[_j];
      if (country.isEuroZone === "y") {
        for (attr in country) {
          if (typeof aggregate[attr] === "undefined") {
            aggregate[attr] = 0;
          }
          aggregate[attr] = aggregate[attr] + parseFloat(country[attr]);
        }
      }
    }
    for (attr in aggregate) {
      aggregate[attr] = Math.round(aggregate[attr] / countries.length);
    }
    total = aggregate.debtGrade + aggregate.deficitGrade + aggregate.yieldGrade + aggregate.unemploymentGrade + aggregate.gdpGrade;
    return new Radar(Raphael('aggregates', 330, 330), [
      {
        score: aggregate.debtGrade,
        label: "Debt / GDP " + aggregate.debt + "%"
      }, {
        score: aggregate.deficitGrade,
        label: "Deficit / GDP " + aggregate.deficit + "%"
      }, {
        score: aggregate.yieldGrade,
        label: "10 yr bond yield " + aggregate.yield + "%"
      }, {
        score: aggregate.unemploymentGrade,
        label: "Enemployment " + aggregate.unemployment + "%"
      }, {
        score: aggregate.gdpGrade,
        label: "GDP " + aggregate.gdp + "%"
      }
    ], '', "Total Score: " + total).draw();
  });
}).call(this);
