'use strict'

var ReactCreateClass = require('react/lib/ReactCompositeComponent').createClass
  , ReactDOM = require('react/lib/ReactDOM')

require('./app.css')

var Staff = require('./staff.es6.js')
  , GuessEntry = require('./guess-entry.es6.js')

module.exports =
  ReactCreateClass
    ( { render:
          function() {
            var {note, guess, onGuess, isGuessCorrect} = this.props
              , {div} = ReactDOM

            return div( {className: 'App'}
                      , Staff({note})
                      , GuessEntry({guess, onGuess, isGuessCorrect})
                      )
          }
      }
    )
