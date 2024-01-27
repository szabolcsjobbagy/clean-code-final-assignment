import { Student } from "./Student"
import { Lecturer } from "./Lecturer"

export class Course {
	private students: Student[] = []
	private lecturers: Lecturer[] = []

	constructor(
		private courseId: number,
		private courseName: string,
		private costInHuf: number,
		private lengthInWeeks: number,
		private startDate: Date
	) {}

	public AddStudentToCourse(student: Student) {
		this.students.push(student)
	}

	public AddLecturerToCourse(lecturer: Lecturer) {
		this.lecturers.push(lecturer)
	}

	public GetStudents() {
		return this.students
	}

	public GetLecturers() {
		return this.lecturers
	}

	public GetId() {
		return this.courseId
	}

	public GetName() {
		return this.courseName
	}

	public GetCostInHuf() {
		return this.costInHuf
	}

	public GetLengthInWeeks() {
		return this.lengthInWeeks
	}

	public GetStartDate() {
		return this.startDate
	}
}
