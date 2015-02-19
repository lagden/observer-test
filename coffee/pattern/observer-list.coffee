'use strict'

define ->

  class ObserverList
    constructor: ->
      @observerList = []

    add: (obj) ->
      @observerList.push obj

    count: ->
      @observerList.length

    get: (index) ->
      if index > -1 and index < @observerList.length
        return @observerList[index]
      return

    indexOf: (obj, startIndex) ->
      i = startIndex
      while i < @observerList.length
        if @observerList[i] == obj
          return i
        i++
      -1
