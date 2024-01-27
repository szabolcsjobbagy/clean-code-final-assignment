export class Course {
    constructor(courseId, courseName, costInHuf, lengthInWeeks, startDate) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.costInHuf = costInHuf;
        this.lengthInWeeks = lengthInWeeks;
        this.startDate = startDate;
        this.students = [];
        this.lecturers = [];
    }
    AddStudentToCourse(student) {
        this.students.push(student);
    }
    AddLecturerToCourse(lecturer) {
        this.lecturers.push(lecturer);
    }
    GetStudents() {
        return this.students;
    }
    GetLecturers() {
        return this.lecturers;
    }
    GetId() {
        return this.courseId;
    }
    GetName() {
        return this.courseName;
    }
    GetCostInHuf() {
        return this.costInHuf;
    }
    GetLengthInWeeks() {
        return this.lengthInWeeks;
    }
    GetStartDate() {
        return this.startDate;
    }
}
