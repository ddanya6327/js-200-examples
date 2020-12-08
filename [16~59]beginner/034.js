// 034. 함수(Function)

// 자바스크립트는 함수 표현식과 함수 선언문 두 가지 방법으로 함수를 나타 낼 수 있다.

// 함수 표현식
var greeting_expression = function(name) {
    console.log('Hi, ' + name);
}

// 함수 선언식
function greeting_declaration(name) {
    console.log('Hi, ' + name);
}

greeting_expression('Yang');
greeting_declaration('Yang');

// 함수 선언식은 호이스팅에 영향을 받지만, 함수 표현식은 호이스팅에 영향을 받지 않는다.
