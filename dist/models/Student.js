import { Person } from "./Person.js";
export class Student extends Person {
    constructor(id, name, birthDate, gender, emailAddress, phoneNumber) {
        super(id, name, birthDate, gender, emailAddress, phoneNumber);
        this.registrationDate = new Date();
    }
    GetRegistrationDate() {
        return this.registrationDate;
    }
    SetRegistrationDate(registrationDate) {
        this.registrationDate = registrationDate;
    }
}
