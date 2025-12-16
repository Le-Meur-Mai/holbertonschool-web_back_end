export default function cleanSet (set, startString) {
  if (typeof startString != "string" || startString.length === 0) {
    return "";
  }
  const lengthString = startString.length;
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
