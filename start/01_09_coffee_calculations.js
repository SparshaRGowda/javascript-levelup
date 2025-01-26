// Write your code here
function calculate(arr){
  const total = arr.reduce((acc, curr)=> acc += curr, 0)
  return `The total bill is ${total*1.25}`;
}
console.log(calculate([2,3,1,5]));