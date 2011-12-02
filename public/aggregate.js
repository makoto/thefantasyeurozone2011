(function() {
  var Aggregate;
  Aggregate = (function() {
    function Aggregate(args) {}
    Aggregate.load = function(collection) {
      return this.records = collection;
    };
    Aggregate.addOrDelete = function(country) {
      var c;
      if (((function() {
        var _i, _len, _ref, _results;
        _ref = this.records;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          if (c.code === country.code) {
            _results.push(c);
          }
        }
        return _results;
      }).call(this)).length !== 0) {
        console.log("deleting");
        return this.records = (function() {
          var _i, _len, _ref, _results;
          _ref = this.records;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            c = _ref[_i];
            if (c.code !== country.code) {
              _results.push(c);
            }
          }
          return _results;
        }).call(this);
      } else {
        console.log("adding");
        return this.records.push(country);
      }
    };
    Aggregate.all = function() {
      return this.records;
    };
    Aggregate.records = [];
    return Aggregate;
  })();
  window.Aggregate = Aggregate;
}).call(this);
