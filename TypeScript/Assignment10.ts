// Create a class 'Student' with rollno, studentName, course ,dictionary of marks(subjectName -
//     >marks [5]).
//     Provide following functionalities
//     initializer
//     override str method
//     accept student data
//     Print student data for given id.
//     Print Student who has failed in any subject.
//     Write menu driven console program to test above functionalities.( accept records of 5 students
//     and store those in list )
    
class student {
    rollno: number;
    studentname: string;
    course: string;
    marks = {};
    constructor() {
      this.rollno = 0;
      this.studentname = "";
      this.course = "";
      this.marks = {};
    }
    setdata(rollno: number, studentname: string, course: string, marks: any) {
      this.rollno = rollno;
      this.studentname = studentname;
      this.course = course;
      this.marks = marks;
    }
    toString() {
      console.log(this.rollno + " " + this.studentname + " " + this.course);
      console.log(this.marks);
      return;
    }
  }
  function failedstudent(obj: Array<student>) {
    console.log(obj);
    for (let i of obj) {
      for (let j of Object.values(i.marks)) {
        if (Number(j) < 33) {
          // console.log("Hello jitendra")
          i.toString();
        }
      }
    }
  }
  function printstud(obj: Array<student>, id: number) {
    for (let i of obj) {
      if (i.rollno == id) {
        i.toString();
      }
    }
  }
  function createObj() {
    const objArr: Array<student> = [];
    for (let i = 0; i < 3; i++) {
      let obj = new student();
      if (i == 0) {
        obj.rollno = 101;
        obj.course = "MCA";
        obj.studentname = "Jitendra";
        let mks = { math: 71, eng: 78, sst: 40 };
        obj.marks = mks;
      } else if (i == 1) {
        obj.rollno = 102;
        obj.course = "BE";
        obj.studentname = "mahesh";
        let mks = { math: 60, eng: 97, sst: 87 };
        obj.marks = mks;
      } else if (i == 2) {
        obj.rollno = 103;
        obj.course = "BSC";
        obj.studentname = "ajay";
        let mks = { math: 67, eng: 77, sst: 32 };
        obj.marks = mks;
      }
      objArr[i] = obj;
    }
    failedstudent(objArr);
    printstud(objArr, 102);
  }
  
  createObj();