// 033. 심볼(Symbol)

const symbol = Symbol();
const hello = Symbol('hello');

console.log(Number(3) === Number(3)); // true
console.log(Symbol('symbol') === Symbol('symbol')); // false
console.log(Symbol() === Symbol()); // false
console.log(typeof Symbol()); // symbol

const nationility = Symbol('nationility');
const user = {
    name: 'jay'
}
user[nationility] = 'korean';
console.log(user[nationility]); // 심볼을 객체의 키로 사용하면 for-in 루프로 가져 올 수 없음. 심볼이 아닌 korean만 출력됨.

for (let key in user) {
    console.log(key); // name
}
console.log(Object.keys(user)); // Object.keys로 symbol은 반환 안되므로, ['name']
console.log(Object.getOwnPropertyNames(user)); // symbol은 반환되지 않음, [ 'name' ]
console.log(JSON.stringify(user)); // JSON으로 만들때도 symbol은 반환되지 않음. {"name":"jay"}

const symbolProperties = Object.getOwnPropertySymbols(user); // symbol을 가져올 때에는 getOwnPropertySymbols를 사용.
console.log(symbolProperties); // [ Symbol(nationility) ]
console.log(user[symbolProperties[0]]); // korean