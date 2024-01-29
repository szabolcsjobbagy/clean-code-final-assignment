export class Person {
    constructor(id, name, birthDate, gender, emailAddress, phoneNumber) {
        this.id = id;
        this.name = name;
        this.birthDate = birthDate;
        this.gender = gender;
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
    }
    GetId() {
        return this.id;
    }
    GetName() {
        return this.name;
    }
    GetBirthDate() {
        return this.birthDate;
    }
    GetGender() {
        return this.gender;
    }
    GetEmailAddress() {
        return this.emailAddress;
    }
    GetPhoneNumber() {
        return this.phoneNumber;
    }
    SetId(id) {
        this.id = id;
    }
    SetName(name) {
        this.name = name;
    }
    SetBirthDate(birthDate) {
        this.birthDate = birthDate;
    }
    SetGender(gender) {
        this.gender = gender;
    }
    SetEmailAddress(emailAddress) {
        this.emailAddress = emailAddress;
    }
    SetPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
