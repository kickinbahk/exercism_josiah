var Leap = function (input) {
  this.input = input
}

Leap.prototype.isLeap = function () {
  var year = this.input
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true
  }
  return false
}

module.exports = Leap
