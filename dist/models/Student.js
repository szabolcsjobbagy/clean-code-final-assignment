import { Person } from "./Person.js";
export class Student extends Person {
    constructor(id, name, birthDate, gender, emailAddress, phoneNumber) {
        super(id, name, birthDate, gender, emailAddress, phoneNumber);
        this.registrationDate = new Date();
        this.enrolledCourses = [];
    }
    GetRegistrationDate() {
        return this.registrationDate;
    }
    GetEnrolledCourses() {
        return this.enrolledCourses;
    }
    EnrollCourse(course) {
        this.enrolledCourses.push(course);
    }
    UnenrollCourse(course) {
        this.enrolledCourses = this.enrolledCourses.filter((enrolledCourse) => enrolledCourse !== course);
    }
    setRegistrationDate(registrationDate) {
        this.registrationDate = registrationDate;
    }
}
