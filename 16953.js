/** @format */

let [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let flag = true
let cnt = 1
while (A <= B) {
	if (A == B) {
		flag = false
		break
	}
	if (B % 2 == 0) {
		B = parseInt(B / 2)
	} else if (B % 10 == 1) {
		B = parseInt(B / 10)
	} else {
		break
	}
	cnt++
}

!flag ? console.log(cnt) : console.log(-1)
