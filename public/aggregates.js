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
    function Aggregates() {
      var aggregate, attr, c, country, total, _i, _len, _ref;
      Aggregates.__super__.constructor.apply(this, arguments);
      aggregate = {};
      _ref = Aggregate.all();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        country = _ref[_i];
        for (attr in country) {
          if (typeof aggregate[attr] === "undefined") {
            aggregate[attr] = 0;
          }
          aggregate[attr] = aggregate[attr] + parseFloat(country[attr] || 0);
        }
      }
      for (attr in aggregate) {
        aggregate[attr] = Math.round(aggregate[attr] / ((function() {
          var _j, _len2, _ref2, _results;
          _ref2 = Aggregate.all();
          _results = [];
          for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
            c = _ref2[_j];
            _results.push(c);
          }
          return _results;
        })()).length);
      }
      total = aggregate.debtGrade + aggregate.deficitGrade + aggregate.yieldsGrade + aggregate.unemploymentGrade + aggregate.gdpGrade;
      $("#aggregates").empty();
      new Radar(Raphael('aggregates', 370, 290), [
        {
          score: aggregate.gdpGrade,
          label: "a. GDP (USD, bil)\n" + aggregate.gdp + " (" + aggregate.gdpGrade + ")\n"
        }, {
          score: aggregate.deficitGrade,
          label: "b. Surplus / Deficit\n" + aggregate.deficit + "% (" + aggregate.deficitGrade + ")"
        }, {
          score: aggregate.yieldsGrade,
          label: "c. 10 yr bond yield\n " + aggregate.yields + "% (" + aggregate.yieldsGrade + ")"
        }, {
          score: aggregate.debtGrade,
          label: "d. Debt\n " + aggregate.debt + "% (" + aggregate.debtGrade + ")"
        }, {
          score: aggregate.unemploymentGrade,
          label: "e. Unemployment\n " + aggregate.unemployment + "% (" + aggregate.unemploymentGrade + ")"
        }
      ], "Total\n (" + total + ")", "", true).draw();
      $('#comparison').empty();
      (new Barchart()).draw();
    }
    return Aggregates;
  })();
  window.Aggregates = Aggregates;
}).call(this);
