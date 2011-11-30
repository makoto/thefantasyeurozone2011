(function() {
  $(document).ready(function() {
    new Radar(Raphael('italy', 320, 200), [
      {
        score: 5,
        label: '2.4%'
      }, {
        score: 4,
        label: '2.3%'
      }, {
        score: 3,
        label: '2.2%'
      }, {
        score: 2,
        label: '2.1%'
      }, {
        score: 1,
        label: '2.0%'
      }
    ]).draw();
    return new Radar(Raphael('france', 320, 200), [
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
    ]).draw();
  });
}).call(this);
