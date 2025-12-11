export class HolbertonClass {
  constructor(year, location) {
    if (typeof year != 'number') {
      throw TypeError("year must be a number");
    }

    if (typeof location != 'string') {
      throw TypeError("location must be a string");
    }

    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (typeof value != 'number') {
      throw TypeError("year must be a number");
    }
    this._year = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value != 'string') {
      throw TypeError("location must be a string");
    }
    this._location = value;
  }

}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    if (typeof firstName != 'string' || typeof lastName != 'string') {
      throw TypeError("firstName and lastName must be a string");
    }
    if (!(holbertonClass instanceof HolbertonClass))
    {
      throw TypeError("holbertonClass must be an instance of HolbertonClass");
    }
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  set holbertonClass(value) {
    if (!(value instanceof HolbertonClass))
    {
      throw TypeError("holbertonClass must be an instance of HolbertonClass");
    }
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value != 'string') {
      throw TypeError("firstName must be a string");
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value != 'string') {
      throw TypeError("lastName must be a string");
    }
    this._lastName = value;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);


const listOfStudents = [student1, student2, student3, student4, student5];
export default listOfStudents;
