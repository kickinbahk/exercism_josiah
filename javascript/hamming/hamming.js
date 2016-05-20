
var Hamming = function () {}

Hamming.prototype.compute = function (strand1, strand2) {
  var strand1Array = strand1.split('')
  var strand2Array = strand2.split('')
  var count = 0
  if (strand1Array.length !== strand2Array.length) {
    throw 'DNA strands must be of equal length.'
  }

  for (var i = 0; i <= strand1Array.length; i++) {
    if (strand1Array[i] !== strand2Array[i]) {
      count = count + 1
    }
  }
  return count
}

module.exports = Hamming
