// 030. 단축 속성명

// {키: 값} 형태로 정의했지만, ES6에서 추가된 단축 속성명을 사용하면 {변수명} 으로도 정의 할 수 있다.

var address = "Seoul";
var members = {};
var addFamily = function (age, name, role) {
  this.members[role] = { age, name };
};
var getHeadcount = function () {
  return Object.keys(this.members).length;
};

var family = { address, members, addFamily, getHeadcount }; // 변수명: 키 값이 같다면 변수명 만으로도 정의 가능

family.addFamily(30, "yang", "aunt");
family.addFamily(3, "lyn", "niece");
family.addFamily(10, "poppy", "dog");
console.log(family.getHeadcount()); // 3
