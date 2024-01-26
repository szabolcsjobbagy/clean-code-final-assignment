import { Course } from "./Course.js"
import { Person } from "./Person.js"

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

	public EnrollCourse(course: Course) {
		this.enrolledCourses.push(course)
	}

	public UnenrollCourse(course: Course) {
		this.enrolledCourses = this.enrolledCourses.filter(
			(enrolledCourse) => enrolledCourse !== course
		)
	}

	public setRegistrationDate(registrationDate: Date) {
		this.registrationDate = registrationDate
	}
}
