'use strict';
define(['./observer-list'], function(ObserverList) {
  var Subject;
  return Subject = (function() {
    function Subject() {
      this.observers = new ObserverList;
    }

    Subject.prototype.addObserver = function(observer) {
      this.observers.add(observer);
    };

    Subject.prototype.removeObserver = function(observer) {
      this.observers.removeAt(this.observers.indexOf(observer, 0));
    };

    Subject.prototype.notify = function(context) {
      var i, observerCount;
      observerCount = this.observers.count();
      i = 0;
      while (i < observerCount) {
        this.observers.get(i).update(context);
        i++;
      }
    };

    return Subject;

  })();
});
