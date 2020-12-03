// 021.Arithmetic operator (산술 연산자)

var x = 10;

console.log(x + 5); // 15
console.log(x - 5); // 5
console.log(x * 5); // 50
console.log(x / 5); // 2

// 산술 등호 연산
console.log(x += 5) // x = x + x  x=15
console.log(x -= 5) // x = x - x  x=10
console.log(x *= 5) // x = x * x  x=50
console.log(x /= 5) // x = x / x  x=10
console.log("---------");

// 나머지 연산자(%)
console.log(15 % 4); // 3

// 거듭제곱 연산자(**)
console.log(3 ** 3); // 27

// 단항음수/양수(+/-)
console.log(+10);
console.log(-10);

// 증감 연산자(++/--)
var value = 1;
value++;
console.log(value); // 2

value--;
console.log(value); // 1
