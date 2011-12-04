(function() {
  var Barchart;
  Barchart = (function() {
    function Barchart(gdp) {
      this.gdp = [['EU', 16250328209821.20, "r"], ['E Asia & Pacific', 16219266890205.30, "r"], ['N America', 16162456051801.20, "r"], ['USA', 14582400000000.00, "c"], ['China', 5878629246676.52, "c"], ['Japan', 5497812568085.79, "c"], ['S America & Caribbean', 5181851228628.24, "r"], ['Brazil', 2087889553821.68, "c"], ['Arab World', 1908954573177.62, "r"], ['India', 1729010242153.78, "c"], ['Russia', 1479819314058.23, "c"], ['S Korea', 1014483158313.58, "c"], ['Switzerland', 523772140978.64, "c"]];
    }
    Barchart.prototype.draw = function() {
      var a, anchor, bottom, c, counter, currentPos, eu, eurozone, fontSize, gdp, length, prevPos, r, ratio, rest, rtotal, s, startY, sum, textX, texts, top, w, x, _i, _j, _len, _len2, _ref, _ref2;
      gdp = this.gdp;
      r = Raphael('comparison', 500, 290);
      length = 200;
      startY = 30;
      w = 20;
      x = 100;
      fontSize = 15 * 0.9;
      eu = r.rect(x, startY, w, length);
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
      ratio = (sum / this.toBillion(gdp[0][1])).toFixed(2);
      console.log('ratio', ratio);
      top = (length * (1 - ratio)) + startY;
      bottom = length * ratio;
      eurozone = r.rect(x, top, w, bottom);
      eurozone.attr({
        fill: '#16617F',
        stroke: '#16617F'
      });
      eurozone.attr({
        'font-size': "" + fontSize + "px"
      });
      eurozone = r.text(x - 45, top, "Eurozone\n" + (sum.toFixed(2)));
      eurozone.attr({
        'font-size': "" + fontSize + "px"
      });
      x = x + 250;
      rtotal = r.rect(x, startY, w, length);
      rtotal.attr({
        stroke: '#E34528'
      });
      counter = 1;
      prevPos = 0;
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
        if (c[2] === "c") {
          textX = x + 30;
          anchor = "start";
        } else {
          textX = x - 10;
          anchor = "end";
        }
        console.log("ddd", c[0], c[2], textX);
        currentPos = top;
        console.log('p', prevPos, 'c', currentPos);
        if (currentPos - prevPos < 10) {
          console.log('overrapping');
          currentPos = prevPos + 15;
        } else {
          console.log('not overrapping');
        }
        rest = r.text(textX, currentPos, "" + gdp[counter][0] + " " + (this.toBillion(gdp[counter][1])));
        rest.attr({
          'font-size': "" + fontSize + "px",
          'text-anchor': anchor
        });
        counter++;
        prevPos = currentPos;
      }
      return texts = [];
    };
    Barchart.prototype.toBillion = function(val) {
      return parseFloat((val / 1000 / 1000 / 1000).toFixed(2));
    };
    return Barchart;
  })();
  window.Barchart = Barchart;
}).call(this);
