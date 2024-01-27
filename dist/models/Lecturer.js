import { Person } from "./Person.js";
export class Lecturer extends Person {
    constructor(id, name, birthDate, gender, emailAddress, phoneNumber) {
        super(id, name, birthDate, gender, emailAddress, phoneNumber);
        this.startDate = new Date();
    }
    GetStartDate() {
        return this.startDate;
    }
    SetStartDate(startDate) {
        this.startDate = startDate;
    }
}
