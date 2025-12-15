export default function getListStudentIds(arrayOfObject) {
  if (!Array.isArray(arrayOfObject)) {
    return [];
  }
  return arrayOfObject.map(item => item.id);
}
