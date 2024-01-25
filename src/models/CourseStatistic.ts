export class CourseStatistic {
	constructor(
		private courseId: number,
		private courseName: string,
		private totalLectures: number,
		private lecturesCompleted: number,
		private progress: number,
		private lastAccessed: Date
	) {}

	public GetCourseId() {
		return this.courseId
	}

	public GetCourseName() {
		return this.courseName
	}

	public GetTotalLectures() {
		return this.totalLectures
	}

	public GetLecturesCompleted() {
		return this.lecturesCompleted
	}

	public GetProgress() {
		return this.progress
	}

	public GetLastAccessed() {
		return this.lastAccessed
	}
}
