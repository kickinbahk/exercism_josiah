var Leap = function (input) {
  this.input = input
}

Leap.prototype.isLeap = function () {
  if (this.input % 4 === 0) {
    return true
  } else {
    return false
  }
}

module.exports = Leap
