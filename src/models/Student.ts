import { Course } from "./Course"
import { Person } from "./Person"

export class Student extends Person {
	private registrationDate = new Date()
	private enrolledCourses: Course[] = []

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

	public GetEnrolledCourses() {
		return this.enrolledCourses
	}
}
