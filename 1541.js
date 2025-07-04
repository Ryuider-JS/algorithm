/** @format */

const input = require('fs').readFileSync('/dev/stdin').toString().split('-')

let sum = 0

for (let i = 0; i < input.length; i++) {
	const tmp = input[i]
		.split('+')
		.map(Number)
		.reduce((a, b) => a + b)
	if (i == 0) {
		sum = tmp
	} else {
		sum -= tmp
	}
}

console.log(sum)
