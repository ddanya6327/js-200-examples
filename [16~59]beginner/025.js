// 025. 비트 연산자

// Binary digit
// 1 = 1
// 2 = 10
// 11 = 1011
// 14 = 1110

console.log(14 & 11); // 1010 => 10
console.log(~14); // -1111 => -15
console.log(14 | 11); // 1111 => 15
console.log(14 ^ 11); // 0101 => 5
console.log(2 << 2); // 1000 => 8
console.log(14 >> 1); // 111 => 7
console.log(14 >>> 2); // 11 => 3