import { Course } from "../../models/Course"
import { CourseStatistics } from "../../models/CourseStatistics"
import { Lecturer } from "../../models/Lecturer"
import { Student } from "../../models/Student"

export interface ICourseRepository {
	AddCourse(course: Course): Promise<void>
	AddStudentToCourse(student: Student, courseId: number): Promise<void>
	AddLecturerToCourse(lecturer: Lecturer, courseId: number): Promise<void>
	GetCourseById(courseId: number): Promise<Course | undefined>
	GetCourses(): Promise<Course[]>
	GetCourseStatisticsByCourseId(courseId: number): Promise<CourseStatistics[]>
}
