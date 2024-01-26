import { Person } from "./Person.js";
export class Lecturer extends Person {
    constructor(id, name, birthDate, gender, emailAddress, phoneNumber) {
        super(id, name, birthDate, gender, emailAddress, phoneNumber);
        this.startDate = new Date();
        this.assignedCourses = [];
    }
    GetStartDate() {
        return this.startDate;
    }
    GetAssignedCourses() {
        return this.assignedCourses;
    }
    SetStartDate(startDate) {
        this.startDate = startDate;
    }
    AddCourse(course) {
        this.assignedCourses.push(course);
    }
}
