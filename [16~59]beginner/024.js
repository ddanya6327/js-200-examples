// 024. 삼항 연산자
var condition = 5 > 10;
condition ? console.log("true") : console.log("false"); // false

var result = condition ? (
    console.log("삼항 연산자1"),
        "String 1"
) : (
    console.log("삼항 연산자2"),
        "String 2"
);
console.log(result); // result = String 2