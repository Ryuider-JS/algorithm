/** @format */

const input = +require('fs').readFileSync('/dev/stdin').toString().trim()

for (let i = Math.floor(input / 5); ; i--) {
	if (i == -1) {
		console.log(-1)
		break
	}
	if ((input - i * 5) % 3 == 0) {
		console.log(i + (input - i * 5) / 3)
		break
	}
}
