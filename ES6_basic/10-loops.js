export default function appendToEachArrayValue(array, appendString) {
  for (const [idex, value] of array.entries()) {
    array[idex] = appendString + value;
  }

  return array;
}
