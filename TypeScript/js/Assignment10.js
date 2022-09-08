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
var student = /** @class */ (function () {
    function student() {
        this.marks = {};
        this.rollno = 0;
        this.studentname = "";
        this.course = "";
        this.marks = {};
    }
    student.prototype.setdata = function (rollno, studentname, course, marks) {
        this.rollno = rollno;
        this.studentname = studentname;
        this.course = course;
        this.marks = marks;
    };
    student.prototype.toString = function () {
        console.log(this.rollno + " " + this.studentname + " " + this.course);
        console.log(this.marks);
        return;
    };
    return student;
}());
function failedstudent(obj) {
    console.log(obj);
    for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
        var i = obj_1[_i];
        for (var _a = 0, _b = Object.values(i.marks); _a < _b.length; _a++) {
            var j = _b[_a];
            if (Number(j) < 33) {
                // console.log("Hello shivam")
                i.toString();
            }
        }
    }
}
function printstud(obj, id) {
    for (var _i = 0, obj_2 = obj; _i < obj_2.length; _i++) {
        var i = obj_2[_i];
        if (i.rollno == id) {
            i.toString();
        }
    }
}
function createObj() {
    var objArr = [];
    for (var i = 0; i < 3; i++) {
        var obj = new student();
        if (i == 0) {
            obj.rollno = 101;
            obj.course = "BTech";
            obj.studentname = "shubham";
            var mks = { math: 67, eng: 77, sst: 30 };
            obj.marks = mks;
        }
        else if (i == 1) {
            obj.rollno = 102;
            obj.course = "BE";
            obj.studentname = "Rahul";
            var mks = { math: 60, eng: 97, sst: 87 };
            obj.marks = mks;
        }
        else if (i == 2) {
            obj.rollno = 103;
            obj.course = "BSC";
            obj.studentname = "rajkumar";
            var mks = { math: 67, eng: 77, sst: 32 };
            obj.marks = mks;
        }
        objArr[i] = obj;
    }
    failedstudent(objArr);
    printstud(objArr, 102);
}
createObj();
