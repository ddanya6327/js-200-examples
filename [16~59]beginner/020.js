// 020. Template String

var name = 'Yang';

var helloString = "hello i'm " + name;
console.log(helloString);

var helloTemplateString = `hello i'm ${name}`;
console.log(helloTemplateString);

console.log(helloString === helloTemplateString); // true