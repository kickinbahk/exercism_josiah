var DnaTranscriber = function () {}

DnaTranscriber.prototype.toRna = function (input) {
  if (input === 'C') {
    return 'G'
  } else if (input === 'G') {
    return 'C'
  }
}

module.exports = DnaTranscriber
