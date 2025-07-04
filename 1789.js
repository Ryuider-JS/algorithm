/** @format */

const input = +require('fs').readFileSync('/dev/stdin').toString().trim()
let i = 0
let sum = i

while (sum <= input) {
	sum += ++i
}
console.log(i - 1)
