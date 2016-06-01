var Gigasecond = function (givenDate) {
  this.newDate = givenDate
}

Gigasecond.prototype.date = function () {
  var convertedToMilliseconds = this.newDate.getTime()
  return new Date(convertedToMilliseconds + Math.pow(10, 12))
}

module.exports = Gigasecond
