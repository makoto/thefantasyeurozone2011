(function() {
  $(document).ready(function() {
    var paper, radar;
    paper = Raphael(10, 10, 320, 200);
    radar = new Radar(paper, [5, 4, 3, 2, 1]);
    return radar.draw();
  });
}).call(this);
