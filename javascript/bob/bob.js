var Bob = function () {}

Bob.prototype.hey = function (string) {
  // check for spaces
  if (string.match(/^\s*$/)) {
    return 'Fine. Be that way!'
  }

  // check for uppercase and not catch digits
  if (string === string.toUpperCase() && string.toLowerCase() !== string) {
    return 'Whoa, chill out!'
  }

  // check if last character is question mark
  if (string.endsWith('?')) {
    return 'Sure.'
  }

  // Nothing matched
  return 'Whatever.'
}

module.exports = Bob
