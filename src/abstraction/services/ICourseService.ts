import { Course } from "../../models/Course"
import { CourseStatistics } from "../../models/CourseStatistics"
import { Student } from "../../models/Student"

export interface ICourseService {
	AddCourse(course: Course): Promise<void>
	AddStudentToCourse(student: Student, courseId: number): Promise<void>
	GetCourseById(courseId: number): Promise<Course | undefined>
	GetCourses(): Promise<Course[]>
	GetCourseStatistics(courseId: number): Promise<CourseStatistics>
}
