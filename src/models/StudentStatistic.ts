export class StudentStatistic {
	constructor(private studentName: string, private numberOfEnrolledCourses: number) {}

	public GetStudentName() {
		return this.studentName
	}

	public GetNumberOfEnrolledCourses() {
		return this.numberOfEnrolledCourses
	}
}
