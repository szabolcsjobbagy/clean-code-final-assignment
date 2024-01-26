import { Course } from "../../models/Course"
import { CourseStatistics } from "../../models/CourseStatistics"

export interface IDbClient {
	AddCourse(course: Course): Promise<void>
	GetCourseById(courseId: number): Promise<Course>
	GetCourses(): Promise<Course[]>
	GetCourseStatistics(courseId: number): Promise<CourseStatistics>
}
