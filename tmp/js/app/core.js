'use strict';
define(['pattern/observer', 'pattern/subject'], function(Observer, Subject) {
  var addBtn, addNewObserver, container, controlCheckbox, extend;
  controlCheckbox = document.getElementById('mainCheckbox');
  addBtn = document.getElementById('addNewObserver');
  container = document.getElementById('observersContainer');
  extend = function(extension, obj) {
    var key;
    for (key in extension) {
      obj[key] = extension[key];
    }
  };
  addNewObserver = function() {
    var check;
    check = document.createElement('input');
    check.type = 'checkbox';
    extend(new Observer, check);
    check.update = function(value) {
      this.checked = value;
    };
    controlCheckbox.addObserver(check);
    container.appendChild(check);
  };
  extend(new Subject, controlCheckbox);
  controlCheckbox.onclick = function() {
    controlCheckbox.notify(controlCheckbox.checked);
  };
  addBtn.onclick = addNewObserver;
});
