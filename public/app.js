(function() {
  $(document).ready(function() {
    var i, _i, _len, _ref, _results;
    new Radar(Raphael('aggregates', 300, 300), [
      {
        score: 4,
        label: 'Debt / GDP 2.4%'
      }, {
        score: 2,
        label: 'Deficit / GDP 2.3%'
      }, {
        score: 5,
        label: '10 yr bond yield 2%'
      }, {
        score: 4,
        label: 'Enemployment 2%'
      }, {
        score: 5,
        label: 'GDP 2%'
      }
    ]).draw();
    _ref = ["BE", "BG", "CZ", "DK", "DE", "EE", "IE", "GR", "ES", "FR", "IT", "CY", "LV", "LT", "LU", "HU", "MT", "NL", "AT", "PL", "PT", "RO", "SI", "SK", "FI", "SE", "GB", "IS", "NO"];
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      i = _ref[_i];
      console.log(i);
      _results.push(new Radar(Raphael('france', 90, 90), [
        {
          score: 5,
          label: '2.4%'
        }, {
          score: 5,
          label: '2.3%'
        }, {
          score: 5,
          label: '2.2%'
        }, {
          score: 4,
          label: '2.1%'
        }, {
          score: 5,
          label: '2.0%'
        }
      ]).draw());
    }
    return _results;
  });
}).call(this);
