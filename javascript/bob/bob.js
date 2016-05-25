//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function () {}

Bob.prototype.hey = function (input) {
  if (input.match(/[A|E|I|O|U]/) && input.endsWith('.')) {
    return 'Whatever.'
  } else if (input.match(/[A|E|I|O|U]/)) {
    return 'Whoa, chill out!'
  } else if (input.endsWith('?')) {
    return 'Sure.'
  } else {
    return 'Whatever.'
  }
}

module.exports = Bob
