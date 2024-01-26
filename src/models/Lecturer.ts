import { Course } from "./Course.js"
import { Person } from "./Person.js"

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

	public SetStartDate(startDate: Date) {
		this.startDate = startDate
	}

	public AddCourse(course: Course) {
		this.assignedCourses.push(course)
	}
}
