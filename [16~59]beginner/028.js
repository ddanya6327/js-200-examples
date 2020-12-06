// 028. Object
// 값들을 그룹으로 묶은 데이터 모음
// {key: value}

var family = {
  'address': "tokyo", // key에 ''를 넣지 않아도 똑같음. address: "tokyo"
  members: {},
  addFamily: function (age, name, role) {
    this.members[role] = {
      age: age,
      name: name,
    };
  },
  getHeadcount: function () {
    return Object.keys(this.members).length;
  },
};

family.addFamily(30, "yang", "aunt");
family.addFamily(3, "lyn", "niece");
family.addFamily(10, "poppy", "dog");
console.log(family.getHeadcount()); // 3

// Object는 JSON과 비슷하지만 key값에 항상 ""를 붙여야 하고, 값은 문자, 숫자, 배열, true, false, null, JSON 객체만 가능함.