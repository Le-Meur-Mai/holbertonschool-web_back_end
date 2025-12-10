import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqtf, floors) {
    if (typeof floors != "number") {
      throw new TypeError("floors must be a number");
    }
    super(sqtf);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    if (typeof value != "number") {
      throw new TypeError("floors must be a number");
    }
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
