// Write your code here
function urlify(str){
  const reg = /[.,/#!$%^&*;:{}=!\-_`~()'"]/g; //whitespace is not included in this
  return str.replace(reg, "").toLowerCase().trim().replace(" ", "-");
}
console.log(urlify("Sparsha Ram"));
