export class CourseStatistics {
	constructor(
		private courseId: number,
		private totalLectures: number,
		private lecturesCompleted: number,
		private progress: number,
		private lastAccessed: Date
	) {}

	public GetCourseId() {
		return this.courseId
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

	public SetCourseId(courseId: number) {
		this.courseId = courseId
	}

	public SetTotalLectures(totalLectures: number) {
		this.totalLectures = totalLectures
	}

	public SetLecturesCompleted(lecturesCompleted: number) {
		this.lecturesCompleted = lecturesCompleted
	}

	public SetProgress(progress: number) {
		this.progress = progress
	}

	public SetLastAccessed(lastAccessed: Date) {
		this.lastAccessed = lastAccessed
	}
}
