export class CourseStatistics {
	private progress: number = 0

	constructor(
		private id: number,
		private courseId: number,
		private studentId: number,
		private totalLectures: number,
		private lecturesCompleted: number,
		private lastAccessed: Date
	) {}

	public GetId() {
		return this.id
	}

	public GetCourseId() {
		return this.courseId
	}

	public GetStudentId() {
		return this.studentId
	}

	public GetTotalLectures() {
		return this.totalLectures
	}

	public GetLecturesCompleted() {
		return this.lecturesCompleted
	}

	public GetLastAccessed() {
		return this.lastAccessed
	}

	public GetProgress() {
		return this.progress
	}

	public SetId(id: number) {
		this.id = id
	}

	public SetCourseId(courseId: number) {
		this.courseId = courseId
	}

	public SetStudentId(studentId: number) {
		this.studentId = studentId
	}

	public SetTotalLectures(totalLectures: number) {
		this.totalLectures = totalLectures
	}

	public SetLecturesCompleted(lecturesCompleted: number) {
		this.lecturesCompleted = lecturesCompleted
	}

	public SetLastAccessed(lastAccessed: Date) {
		this.lastAccessed = lastAccessed
	}

	public SetProgress(lecturesCompleted: number, totalLectures: number) {
		this.progress = (lecturesCompleted / totalLectures) * 100
	}
}
