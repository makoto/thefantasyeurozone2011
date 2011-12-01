(function() {
  var Categories;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Categories = (function() {
    __extends(Categories, Spine.Controller);
    Categories.prototype.tag = 'ul';
    Categories.prototype.events = {
      "click li a": 'click'
    };
    function Categories(args) {
      Categories.__super__.constructor.apply(this, arguments);
    }
    Categories.prototype.click = function(event) {
      var type;
      type = event.target.id;
      Aggregate.load(Country.filterBy(type));
      new Aggregates(type);
      return new Countries({
        el: $('#countries'),
        type: type
      });
    };
    return Categories;
  })();
  window.Categories = Categories;
}).call(this);
