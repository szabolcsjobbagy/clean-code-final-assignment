import { Course } from "./Course"
import { Person } from "./Person"

export class Lecturer extends Person {
	private startDate: Date = new Date()
	private assignedCourses: Course[] = []

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

	public GetStartDate() {
		return this.startDate
	}

	public GetAssignedCourses() {
		return this.assignedCourses
	}
}
