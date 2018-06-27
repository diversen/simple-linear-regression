var regressionLine = require('./index')

var x = [1,2,2,3]
var y = [1,2,3,6]

// Example from: https://www.khanacademy.org/math/statistics-probability/describing-relationships-quantitative-data/modal/v/calculating-the-equation-of-a-regression-line
console.log(regressionLine(x, y))

// y^= ax + b
// => { a: 2.4999999999999996, b: -1.9999999999999991 }

// Example from: https://en.wikipedia.org/wiki/Simple_linear_regression#Numerical_example
x = [1.47, 1.50, 1.52, 1.55, 1.57, 1.60, 1.63, 1.65, 1.68, 1.70, 1.73, 1.75, 1.78, 1.80, 1.83]
y = [52.21, 53.12, 54.48, 55.84, 57.20, 58.57, 59.93, 61.29, 63.11, 64.47, 66.28, 68.10, 69.92, 72.19, 74.46]

console.log(regressionLine(x, y))

// y^= ax + b
// => { a: 61.27218654211061, b: -39.06195591884391 }

x = [1, 2, 3, 4]
y = [6, 5, 7, 10]

console.log(regressionLine(x, y))

// y^= ax + b
// => { a: 1.4000000000000001, b: 3.4999999999999996 }





