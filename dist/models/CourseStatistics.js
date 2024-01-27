export class CourseStatistics {
    constructor(id, courseId, studentId, totalLectures, lecturesCompleted, lastAccessed) {
        this.id = id;
        this.courseId = courseId;
        this.studentId = studentId;
        this.totalLectures = totalLectures;
        this.lecturesCompleted = lecturesCompleted;
        this.lastAccessed = lastAccessed;
        this.progress = 0;
    }
    GetId() {
        return this.id;
    }
    GetCourseId() {
        return this.courseId;
    }
    GetStudentId() {
        return this.studentId;
    }
    GetTotalLectures() {
        return this.totalLectures;
    }
    GetLecturesCompleted() {
        return this.lecturesCompleted;
    }
    GetLastAccessed() {
        return this.lastAccessed;
    }
    GetProgress() {
        return this.progress;
    }
    SetId(id) {
        this.id = id;
    }
    SetCourseId(courseId) {
        this.courseId = courseId;
    }
    SetStudentId(studentId) {
        this.studentId = studentId;
    }
    SetTotalLectures(totalLectures) {
        this.totalLectures = totalLectures;
    }
    SetLecturesCompleted(lecturesCompleted) {
        this.lecturesCompleted = lecturesCompleted;
    }
    SetLastAccessed(lastAccessed) {
        this.lastAccessed = lastAccessed;
    }
    SetProgress(lecturesCompleted, totalLectures) {
        this.progress = (lecturesCompleted / totalLectures) * 100;
    }
}
