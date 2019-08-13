var student = /** @class */ (function () {
    function student(name, rno, grade) {
        this.name = name;
        this.rno = rno;
        this.grade = grade;
    }
    student.prototype.showdetails = function () {
        console.log("student name:" + this.name + "\n" + "roll no" + this.rno + "\ngrade" + this.grade);
    };
    return student;
}());
var o1 = new student("bhavitha", 160115737008, "A");
o1.showdetails();
