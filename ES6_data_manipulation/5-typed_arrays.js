export default function createInt8TypedArray(length, position, value) {
  let buffer = new ArrayBuffer(length);
  let view = new Uint8Array(buffer);
  try {
    view[position] = value;
  }
  catch (error) {
    console.log("Position outside range");
  }
  let newArray = new DataView(buffer);
  return newArray;
}
