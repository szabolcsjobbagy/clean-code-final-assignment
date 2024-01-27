import { Person } from "./Person.js"

export class Student extends Person {
	private registrationDate = new Date()

	constructor(
		id: number,
		name: string,
		birthDate: Date,
		gender: string,
		emailAddress: string,
		phoneNumber: string
	) {
		super(id, name, birthDate, gender, emailAddress, phoneNumber)
	}

	public GetRegistrationDate() {
		return this.registrationDate
	}

	public setRegistrationDate(registrationDate: Date) {
		this.registrationDate = registrationDate
	}
}
