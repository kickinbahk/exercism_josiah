var DnaTranscriber = function () {}

DnaTranscriber.prototype.toRna = function (input) {
  return compare(input).join('')
}

function compare (dnaString) {
  var dnaArray = dnaString.split('')
  var rnaArray = []

  for (var i = 0; i < dnaArray.length; i++) {
    if (dnaArray[i] === 'C') {
      rnaArray.push('G')
    } else if (dnaArray[i] === 'G') {
      rnaArray.push('C')
    } else if (dnaArray[i] === 'A') {
      rnaArray.push('U')
    }
  }
  return rnaArray
}

module.exports = DnaTranscriber
