(function() {
  var Country;
  Country = (function() {
    function Country(array) {
      this.name = array[0], this.code = array[1], this.isEuroZone = array[2], this.deficit = array[3], this.debt = array[4], this.yield = array[5], this.unemployment = array[6], this.gdp = array[7], this.deficitGrade = array[8], this.debtGrade = array[9], this.yieldGrade = array[10], this.unemploymentGrade = array[11], this.gdpGrade = array[12];
    }
    Country.prototype.totalGrade = function() {
      var g, total, _i, _len, _ref;
      total = 0;
      _ref = [this.deficitGrade, this.debtGrade, this.yieldGrade, this.unemploymentGrade, this.gdpGrade];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        g = _ref[_i];
        total += g;
      }
      return total;
    };
    Country.prototype.total = function() {};
    return Country;
  })();
  window.Country = Country;
}).call(this);