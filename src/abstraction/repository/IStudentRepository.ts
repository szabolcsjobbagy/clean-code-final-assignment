import { Course } from "../../models/Course"
import { CourseStatistic } from "../../models/CourseStatistic"

export interface ICourseRepository {
	AddCourse(course: Course): Promise<void>
	GetCourseByName(courseName: string): Promise<Course | undefined>
	GetCourses(): Promise<Course[]>
	GetCourseStatistics(courseName: string): Promise<CourseStatistic>
}
