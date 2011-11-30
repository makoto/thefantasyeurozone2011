(function() {
  var Country;
  Country = (function() {
    function Country(array) {
      this.name = array[0], this.code = array[1], this.isEuroZone = array[2], this.deficit = array[3], this.debt = array[4], this.yield = array[5], this.unemployment = array[6], this.gdp = array[7];
    }
    return Country;
  })();
  window.Country = Country;
}).call(this);
