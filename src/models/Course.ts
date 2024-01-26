import { Lecturer } from "./Lecturer"
import { Student } from "./Student"

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

	public AddLecturer(lecturer: Lecturer) {
		this.lecturers.push(lecturer)
	}

	public AddStudent(student: Student) {
		this.students.push(student)
	}

	public GetLecturers() {
		return this.lecturers
	}

	public GetLecturerCount() {
		return this.lecturers.length
	}

	public GetStudents() {
		return this.students
	}

	public GetStudentCount() {
		return this.students.length
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
