'use strict';
define('config', function() {
  requirejs.config({
    baseUrl: '/js/lib',
    paths: {
      app: '../app',
      pattern: '../pattern',
      templates: '../templates'
    }
  });
});
