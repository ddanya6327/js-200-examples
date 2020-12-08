// 035. 예외 처리

function checkNumber(val) {
    if (typeof val !== 'number') throw 'not number'; // Error 발생시, 함수 블록을 빠져나감
    console.log('is number');
}

checkNumber(100);
checkNumber('Wrong type'); // error
console.log('finish'); // 실행되지 않는다.

// 아래와 같이 try-catch를 사용하자.

// try {
//     checkNumber(100);
//     checkNumber('Wrong type');
// } catch (e) {
//     console.log(`Error! >>> ${e}`);
// } finally {
//     console.log('finish');
// }