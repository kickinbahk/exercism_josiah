var Bob = function () {}

Bob.prototype.hey = function (input) {
  return getResponse(input)
}

function getResponse (string) {
  'use strict'

  let sure = 'Sure.'
  let whatev = 'Whatever.'
  let chillOut = 'Whoa, chill out!'
  let fine = 'Fine. Be that way!'

  if (string.match(/^\s*$/)) {
    return fine
  }

  // check for period...assume it is just statement
  if (string.endsWith('.')) {
    return whatev
  }

  // check for uppercase
  if (string === string.toUpperCase() && string.toLowerCase() !== string) {
    return chillOut
  }

  if (string.endsWith('?')) {
    return sure
  }
  return whatev
}

module.exports = Bob
