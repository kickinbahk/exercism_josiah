var Gigasecond = function (givenDate) {
  this.newDate = givenDate
}

Gigasecond.prototype.date = function () {
  var convertedToMilliseconds = this.newDate.getTime()
  return new Date(convertedToMilliseconds + 1000000000000)
}

module.exports = Gigasecond
