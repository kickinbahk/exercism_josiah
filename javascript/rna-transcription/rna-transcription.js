var DnaTranscriber = function () {}

DnaTranscriber.prototype.toRna = function (input) {
  return traslateDNAToRNA(input).join('')
}

function traslateDNAToRNA (dnaString) {
  var dnaArray = dnaString.split('')
  var rnaArray = []

  for (var i = 0; i < dnaArray.length; i++) {
    if (dnaArray[i] === 'C') {
      rnaArray.push('G')
    } else if (dnaArray[i] === 'G') {
      rnaArray.push('C')
    } else if (dnaArray[i] === 'A') {
      rnaArray.push('U')
    } else if (dnaArray[i] === 'T') {
      rnaArray.push('A')
    }
  }
  return rnaArray
}

module.exports = DnaTranscriber
