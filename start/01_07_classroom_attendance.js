// Write your code here
const classroom = {
  hasTeachingAssistant: false,
  classList: ['Sam', 'Stu1', 'Stu2', 'Stu3']
};
function getStudents(classR){
  let {hasTeachingAssistant, classList} = classR;
  let teacher, assistant, students;
  console.log(hasTeachingAssistant);
  if(hasTeachingAssistant){
    [teacher, assistant, ...students] = classList;
  }else{
    [teacher, ...students] = classList;
  }
  return students;
  // let {hasTeachingAssistant, classList} = classR;
  // let [v1, v2, ...v3] = classList;
  // if(hasTeachingAssistant){
  //   console.log([...v3]);
  // }
  // else{
  //   console.log([v2, ...v3]);
  // }
}
console.log(getStudents(classroom));
