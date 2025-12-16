export default function cleanSet (set, startString) {
  const lengthString = startString.length;
  if (lengthString === 0) {
    return "";
  }
  let newString = "";
  for (const element of set) {
    if (element.startsWith(startString)) {
      if (newString.length > 0) {
        newString += "-"
      }
      newString += element.substring(lengthString);
    }
  }
  return newString;
}
