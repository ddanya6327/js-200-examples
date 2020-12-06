// 23. 논리 연산자

// AND 논리 연산자 &&
console.log(true && true); // true
console.log(true && false); // false
console.log("String" == "String" && 5 == 5); // true
console.log(5 == 5 && "String 1" == "String 2"); // false

// OR 논리 연산자 ||
console.log(true || false); // true
console.log(false || false); // true
console.log('String' == 'String' || 5 == 10); // false

// NOT 논리 연산자 !
console.log(!true); // false
console.log(!false); // true
console.log(!5);  // false
console.log(!'String'); // false
console.log(!!5); // true
console.log(!!'String'); // true

// false 0 -0 NaN null undefined 의 경우 false, 그 외의 경우 true를 반환