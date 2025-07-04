/** @format */
const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((el) => el.split(' ').map(Number))

let [N, K] = input[0]
let cnt = 0

while (K > 0) {
	if (K < input[N][0]) {
		N -= 1
		continue
	}
	K -= input[N][0]
	cnt += 1
}

console.log(cnt)
