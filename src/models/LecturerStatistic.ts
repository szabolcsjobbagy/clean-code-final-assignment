export class LecturerStatistic {
	constructor(
		private lecturerName: string,
		private numberOfAssignedCourses: number,
		private numberOfStudents: number
	) {}

	public GetLecturerName() {
		return this.lecturerName
	}

	public GetNumberOfAssignedCourses() {
		return this.numberOfAssignedCourses
	}

	public GetNumberOfStudents() {
		return this.numberOfStudents
	}
}
