(function() {
  var Barchart;
  Barchart = (function() {
    function Barchart(gdp) {
      this.gdp = gdp;
    }
    Barchart.prototype.draw = function() {
      var a, bottom, c, counter, eu, eurozone, gdp, length, r, ratio, rtotal, s, startY, sum, textX, texts, top, w, x, _i, _j, _len, _len2, _ref, _ref2;
      gdp = this.gdp;
      r = Raphael('comparison', 200, 300);
      length = 200;
      startY = 20;
      w = 20;
      eu = r.rect(30, 20, 20, length);
      eu.attr({
        stroke: '#16617F',
        fill: 'white'
      });
      sum = 0;
      _ref = Aggregate.all();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        a = _ref[_i];
        sum += a.gdp;
      }
      console.log('sum', sum);
      ratio = (sum / this.toBillion(gdp[0][1])).toFixed(2);
      console.log('ratio', ratio);
      top = (length * (1 - ratio)) + startY;
      bottom = length * ratio;
      x = 30;
      eurozone = r.rect(x, top, w, bottom);
      eurozone.attr({
        fill: '#16617F',
        stroke: '#16617F'
      });
      x = 80;
      rtotal = r.rect(x, startY, w, length);
      rtotal.attr({
        stroke: '#E34528'
      });
      counter = 0;
      textX = x + 70;
      _ref2 = gdp.slice(1, (gdp.length - 1 + 1) || 9e9);
      for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
        c = _ref2[_j];
        ratio = c[1] / parseFloat(gdp[0][1]);
        top = (length * (1 - ratio)) + startY;
        bottom = length * ratio;
        a = r.rect(x, top, w, bottom);
        s = 1 * (ratio / 1.5);
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
      return r.text(textX, length, texts);
    };
    Barchart.prototype.toBillion = function(val) {
      return parseFloat((val / 1000 / 1000 / 1000).toFixed(2));
    };
    return Barchart;
  })();
  window.Barchart = Barchart;
}).call(this);
