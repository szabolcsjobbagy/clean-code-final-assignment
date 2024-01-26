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
    AddLecturer(lecturer) {
        this.lecturers.push(lecturer);
    }
    AddStudent(student) {
        this.students.push(student);
    }
    GetLecturers() {
        return this.lecturers;
    }
    GetLecturerCount() {
        return this.lecturers.length;
    }
    GetStudents() {
        return this.students;
    }
    GetStudentCount() {
        return this.students.length;
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
