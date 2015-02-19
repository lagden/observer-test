'use strict'

define [
  './observer-list'
], (ObserverList) ->

  class Subject
    constructor: ->
      @observers = new ObserverList

    addObserver: (observer) ->
      @observers.add observer
      return

    removeObserver: (observer) ->
      @observers.removeAt @observers.indexOf(observer, 0)
      return

    notify: (context) ->
      observerCount = @observers.count()
      i = 0
      while i < observerCount
        @observers.get(i).update context
        i++
      return
