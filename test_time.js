/**
 * Created by woojin on 2015-10-05.
 */

console.time('alpha');

var output = 1;
for (var i = 1; i <= 1000; i++) {
	output *= i;
}
console.log('Result:', output);

// 시간 측정 종료
console.timeEnd('alpha');