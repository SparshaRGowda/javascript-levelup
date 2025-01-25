// Write your code here
const userName = Symbol('user');
const password  = Symbol('pass');
const user = {
  [userName]: 'sparsha', //adding symbols as object keys([]) will prevent from accessing
  [password]: 'spar',
  age: 34
}
console.log(user.userName);
console.log(user.password);
console.log(user.age);