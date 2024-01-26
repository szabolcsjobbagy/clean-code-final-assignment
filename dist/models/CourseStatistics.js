export class CourseStatistics {
    constructor(courseId, totalLectures, lecturesCompleted, progress, lastAccessed) {
        this.courseId = courseId;
        this.totalLectures = totalLectures;
        this.lecturesCompleted = lecturesCompleted;
        this.progress = progress;
        this.lastAccessed = lastAccessed;
    }
    GetCourseId() {
        return this.courseId;
    }
    GetTotalLectures() {
        return this.totalLectures;
    }
    GetLecturesCompleted() {
        return this.lecturesCompleted;
    }
    GetProgress() {
        return this.progress;
    }
    GetLastAccessed() {
        return this.lastAccessed;
    }
    SetCourseId(courseId) {
        this.courseId = courseId;
    }
    SetTotalLectures(totalLectures) {
        this.totalLectures = totalLectures;
    }
    SetLecturesCompleted(lecturesCompleted) {
        this.lecturesCompleted = lecturesCompleted;
    }
    SetProgress(progress) {
        this.progress = progress;
    }
    SetLastAccessed(lastAccessed) {
        this.lastAccessed = lastAccessed;
    }
}
