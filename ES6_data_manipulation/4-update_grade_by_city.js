export default function updateStudentGradeByCity (getListStudents, city, newGrades) {
  const cityStudents = getListStudents.filter(item => item.location === city);
  return cityStudents.map(item => newgrade(item, newGrades));
}

function newgrade(item, newGrades) {
  for (const element of newGrades) {
    if (item.id === element.studentId) {
      item.grade = element.grade;
      return item;
    }
    else {
      item.grade = 'N/A';
    }
  }
  return item;
}
