/** @format */

const input = require('fs').readFileSync('/dev/stdin').toString().trim()

const number = []
const operator = []

let tmp = ''
for (let i = 0; i < input.length; i++) {
	if (input[i] === '+' || input[i] === '-') {
		number.push(Number(tmp))
		operator.push(input[i])
		tmp = ''
	} else {
		tmp += input[i]
	}
}
number.push(Number(tmp))

for (let i = 0; i < operator.length; i++) {
	if (operator[i] === '+') {
		number[i] = number[i] + number[i + 1]
		number.splice(i + 1, 1)
		operator.splice(i, 1)
		i -= 1
	}
}

let sum = number[0]
for (let i = 1; i < number.length; i++) {
	sum -= number[i]
}
console.log(sum)
