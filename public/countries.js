(function() {
  var Countries;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Countries = (function() {
    __extends(Countries, Spine.Controller);
    function Countries(args) {
      var c, countries, _i, _len;
      countries = Country.sortBy("current");
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
    return Countries;
  })();
  window.Countries = Countries;
}).call(this);
