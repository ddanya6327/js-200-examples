// 026. 자료형 변환(type coercion)

console.log("5" + 1); // "51"
console.log("5" - 1); // 4
console.log("5" * 2); // 10
console.log("There is " + 5); // "There is 5"
console.log("Five" * 2); // NaN

// 연산자를 활용한 자료형 변환
var str = 5 + "1";
console.log(str); // "51"
console.log(typeof str); // string

// 함수를 활용한 자료형 변환
var num = +str;
console.log(num); // 51
console.log(typeof num); // number

num = Number(str);
console.log(num); // 51
console.log(typeof num); // number