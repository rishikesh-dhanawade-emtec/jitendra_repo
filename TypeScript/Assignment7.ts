// Use inheritance
// Write a class Course with name,fees. Provide following functionalities
// initializer
// Accept data
// Print Data .
// Write a Class Computer with subjectList.
// Provide following functionalities
// initializer
// Accept data
// Print Data .
// Write a Class Electonics with subjectList.
// Provide following functionalities
// initializer
// Accept data
// Print Data

class Course {
    name: string = "";
    fees: number = 0;
  
    constructor(name: string, fees: number) {
      this.name = name;
      this.fees = fees;
    }
    printData() {
      console.log(`&{name}`);
      console.log(`&{fees}`);
    }
  }
  const courseObj = new Course(`asdf`, 5000000);
  console.log(courseObj);
  
  class Computer extends Course {
    subjectList: string = "";
    constructor(subjectList: string, name: string, fees: number) {
      super(name, fees);
      this.subjectList = subjectList;
    }
  
    printData(): void {
      console.log(`&{name}`);
      console.log(`&{fees}`);
      console.log(`&{subjectList}`);
    }
  }
  const computerObj = new Computer("dfsdhf", "aqadf", 300000);
  console.log(computerObj);
  
  class Electonics extends Computer {
    sublist1: string = "";
    constructor(
      subList1: string,
      name: string,
      fees: number,
      subjectList: string
    ) {
      super(name, subjectList, fees);
    }
    printData(): void {
      console.log(`&{name}`);
      console.log(`&{fees}`);
      console.log(`&{subjectList}`);
      console.log(`&{subList1}`);
    }
  }
  
