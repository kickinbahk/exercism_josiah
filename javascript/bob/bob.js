var Bob = function () {}

Bob.prototype.hey = function (string) {
  'use strict'

  let sure = 'Sure.'
  let whatev = 'Whatever.'
  let chillOut = 'Whoa, chill out!'
  let fine = 'Fine. Be that way!'

  // check for spaces
  if (string.match(/^\s*$/)) {
    return fine
  }

  // check for period...assume it is just statement
  if (string.endsWith('.')) {
    return whatev
  }

  // check for uppercase and not catch digits
  if (string === string.toUpperCase() && string.toLowerCase() !== string) {
    return chillOut
  }

  // check if last character is question mark
  if (string.endsWith('?')) {
    return sure
  }

  // Nothing matched
  return whatev
}

module.exports = Bob
