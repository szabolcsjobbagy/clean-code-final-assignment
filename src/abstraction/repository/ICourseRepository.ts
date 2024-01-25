import { Course } from "../../models/Course"
import { CourseStatistic } from "../../models/CourseStatistic"

export interface ICourseRepository {
	AddCourse(course: Course): Promise<void>
	GetCourseById(courseId: number): Promise<Course | undefined>
	GetCourses(): Promise<Course[]>
	GetCourseStatistics(courseId: number): Promise<CourseStatistic>
}
