/** @format */

const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((el) => el.split(' ').map(Number))

const [N] = input[0]
const array = input[1].sort((a, b) => a - b)
let sum = 0

for (let i = 0; i < array.length; i++) {
	sum += array[i] * (N - i)
}

console.log(sum)
