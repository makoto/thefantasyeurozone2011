(function() {
  var Country;
  Country = (function() {
    function Country(opts) {
      var key, val;
      for (key in opts) {
        val = opts[key];
        this[key] = val;
      }
      this.gdp = parseFloat((this.gdp / 1000 / 1000 / 1000).toFixed(2));
    }
    Country.prototype.totalGrade = function() {
      var g, total, _i, _len, _ref;
      total = 0;
      _ref = [this.deficitGrade, this.yieldsGrade, this.debtGrade, this.unemploymentGrade, this.gdpGrade];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        g = _ref[_i];
        total += g;
      }
      return total;
    };
    Country.all = function(id) {
      return this.records;
    };
    Country.findByCode = function(code) {
      var c;
      return ((function() {
        var _i, _len, _ref, _results;
        _ref = this.all();
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          if (c.code === code) {
            _results.push(c);
          }
        }
        return _results;
      }).call(this))[0];
    };
    Country.add = function(c) {
      return this.records.push(c);
    };
    Country.records = [];
    Country.sortBy = function(type) {
      switch (type) {
        case "current":
          return this.all().sort(function(a, b) {
            return b.isEuroZone.localeCompare(a.isEuroZone);
          });
        case "original":
          return this.all().sort(function(a, b) {
            return b.isOriginalEuroZone.localeCompare(a.isOriginalEuroZone);
          });
        case "deficit":
          return this.all().sort(function(a, b) {
            return b.deficit - a.deficit;
          });
        case "yield":
          return this.all().sort(function(a, b) {
            return a.yields - b.yields;
          });
        case "debt":
          return this.all().sort(function(a, b) {
            return a.debt - b.debt;
          });
        case "unemployment":
          return this.all().sort(function(a, b) {
            return a.unemployment - b.unemployment;
          });
        case "gdp":
          return this.all().sort(function(a, b) {
            return b.gdp - a.gdp;
          });
        case "best":
          return this.all().sort(function(a, b) {
            return b.totalGrade() - a.totalGrade();
          });
        case "worst":
          return this.all().sort(function(a, b) {
            return a.totalGrade() - b.totalGrade();
          });
        case "all":
          return this.all();
      }
    };
    Country.filterBy = function(type) {
      var c, _i, _j, _len, _len2, _ref, _ref2, _results, _results2;
      switch (type) {
        case "current":
          _ref = this.all();
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            c = _ref[_i];
            if (c.isEuroZone === "y") {
              _results.push(c);
            }
          }
          return _results;
          break;
        case "original":
          _ref2 = this.all();
          _results2 = [];
          for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
            c = _ref2[_j];
            if (c.isOriginalEuroZone === "y") {
              _results2.push(c);
            }
          }
          return _results2;
          break;
        case "all":
          return this.all();
        default:
          return this.sortBy(type).slice(0, 11);
      }
    };
    return Country;
  })();
  window.Country = Country;
}).call(this);
