export default function getStudentsByLocation (getListStudents, city) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  return getListStudents.filter(item => item.location == city);
}
