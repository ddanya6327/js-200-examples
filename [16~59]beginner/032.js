// 032. 비구호좌 할당(Destructuring Assignment)

var obj = { a: 1, b: 2, c: 30, d: 44, e: 5 };

var { a, c } = obj;
console.log(`a >>> ${a}`); // a >>> 1
console.log(`c >>> ${c}`); // c >>> 30

// 기존의 값을 가져와서 새로운 변수명으로 할당하여 정의 할 수 있음. 구분자 : 를 사용.
var { b:newB } = obj;
console.log(`newB >>> ${newB}`); // 2

var { a:newA = 10, f:newF = 5 } = obj;
console.log(`newA >>> ${newA}`); // newA >>> 1
console.log(`newF >>> ${newF}`); // newF >>> 5

// 배열의 경우 대괄호[] 를 사용

var arr = [1,2,30,44,5];

var [b,c,...rest] = arr;
console.log(b); // 1
console.log(c); // 2
console.log(rest); // [30, 44, 5]

var [a=10, f=9] = [1];
console.log(a); // 1
console.log(f); // 해당하는 값이 없으므로 초기값인 9

[a, f] = [f, a];
console.log(a); // 9
console.log(f); // 1

function getArr() {
    return [1,2,3,4,5,6];
}
[a, , , , ,f] = getArr();
console.log(a); // 1
console.log(f); // 6