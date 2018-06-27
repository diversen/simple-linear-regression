var deviation = require('math-standard-deviation');
var correlationCoefficientR = require('correlation-coefficient-r');

function regressionLine (x, y) {

    var xMean = deviation.mean(x)
    var yMean = deviation.mean(y)

    var xDeviation = deviation.standardDeviation(x)
    var yDeviation = deviation.standardDeviation(y)

    var slope = yDeviation / xDeviation

    var linearA = correlationCoefficientR(x, y) * slope
    var linearB = yMean - (xMean * linearA)
    
    return {
        a: linearA,
        b: linearB
    }
}

module.exports = regressionLine