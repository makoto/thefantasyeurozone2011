(function() {
  var Barchart;
  Barchart = (function() {
    function Barchart(gdp) {
      this.gdp = gdp;
    }
    Barchart.prototype.draw = function() {
      var a, bottom, c, counter, eu, eurozone, gdp, h, length, r, ratio, rtotal, s, startY, textX, texts, top, w, x, _i, _len, _ref, _ref2;
      gdp = this.gdp;
      r = Raphael('comparison', 200, 300);
      eu = r.rect(30, 20, 20, 200);
      eu.attr({
        stroke: '#16617F',
        fill: 'white'
      });
      eurozone = r.rect(30, 120, 20, 100);
      eurozone.attr({
        fill: '#16617F',
        stroke: '#16617F'
      });
      _ref = [80, 20, 20, 200], x = _ref[0], startY = _ref[1], w = _ref[2], h = _ref[3];
      rtotal = r.rect(x, startY, w, h);
      rtotal.attr({
        stroke: '#E34528'
      });
      length = h;
      counter = 0;
      console.log('length', this.gdp.length);
      textX = x + 70;
      _ref2 = gdp.slice(1, (gdp.length - 1 + 1) || 9e9);
      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
        c = _ref2[_i];
        console.log('c', c, counter);
        ratio = c[1] / parseFloat(gdp[0][1]);
        top = (length * (1 - ratio)) + startY;
        bottom = length * ratio;
        a = r.rect(x, top, w, bottom);
        s = 1 * (1 - (ratio / 1.5));
        a.attr({
          stroke: '#E34528',
          fill: "hsb(0," + s + ",1)"
        });
        if (counter < 4 && counter !== 0) {
          r.text(textX, top, "" + gdp[counter][0] + " " + (this.toBillion(gdp[counter][1])));
        }
        counter++;
      }
      texts = [];
      for (c = 5; c <= 13; c++) {
        texts.push("" + gdp[c][0] + " " + (this.toBillion(gdp[c][1])));
      }
      texts = texts.join('\n');
      return r.text(textX, 200, texts);
    };
    Barchart.prototype.toBillion = function(val) {
      return parseFloat((val / 1000 / 1000 / 1000).toFixed(2));
    };
    return Barchart;
  })();
  window.Barchart = Barchart;
}).call(this);
