'use strict'

define 'config', ->
  requirejs.config
    baseUrl: '/js/lib'
    paths:
      app: '../app'
      pattern: '../pattern'
      templates: '../templates'

  return
