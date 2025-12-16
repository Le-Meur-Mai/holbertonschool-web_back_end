export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error("Position outside range");
  }
  let buffer = new ArrayBuffer(length);
  let view = new Uint8Array(buffer);
  view[position] = value;
  let newArray = new DataView(buffer);
  return newArray;
}
