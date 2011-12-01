(function() {
  var Aggregates;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Aggregates = (function() {
    __extends(Aggregates, Spine.Controller);
    function Aggregates(args) {
      var aggregate, attr, country, total, _i, _len, _ref;
      Aggregates.__super__.constructor.apply(this, arguments);
      aggregate = {};
      _ref = Country.filterBy("current");
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        country = _ref[_i];
        $("#countries span#" + country.code).addClass('active');
        for (attr in country) {
          if (typeof aggregate[attr] === "undefined") {
            aggregate[attr] = 0;
          }
          aggregate[attr] = aggregate[attr] + parseFloat(country[attr]);
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
    return Aggregates;
  })();
  window.Aggregates = Aggregates;
}).call(this);
