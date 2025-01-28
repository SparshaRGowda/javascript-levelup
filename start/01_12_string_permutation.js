// Write your code here
//iterative
function permutation(str){
  let res; 
  for(let i=1; i<=str.length; i++){
    if(res === undefined){
      res = i;
      continue;
    }
    res *= i;
  }
  return res;
}
//recursive
function permu(str){
  if(str.length === 1) return 1;
  return str.length * permu(str.slice(1));
}
console.log(permutation('hello'));
console.log(permu('hello'));