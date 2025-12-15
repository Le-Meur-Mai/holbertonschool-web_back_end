export default function getStudentIdsSum (getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return;
  }
  return getListStudents.reduce((sum, current) => sum + current.id, 0);
}
