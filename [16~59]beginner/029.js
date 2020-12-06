// 029. Object 2

var family = {
    'address': "tokyo",
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

for (role in family.members) {
    console.log(family.members[role].name + ": " + family.members[role].age)
}
// yang: 30, lyn: 3, poppy: 10

// Object의 값을 수정하거나 추가 할 때는 . 이나 [key] 를 사용한다.
family.members['new'] = {age: 4, name: "pop"};
family.members.niece = {age: 5, name: "lyn"};

for (role in family.members) {
    console.log(family.members[role].name + ": " + family.members[role].age)
}
// yang: 30, lyn: 5, poppy: 10, pop: 4