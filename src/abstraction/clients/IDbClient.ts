import { Course } from "../../models/Course"
import { CourseStatistics } from "../../models/CourseStatistics"
import { Lecturer } from "../../models/Lecturer"
import { Student } from "../../models/Student"

export interface IDbClient {
	AddCourseToDb(course: Course): Promise<void>
	AddStudentToCourseInDb(student: Student, courseId: number): Promise<void>
	AddLecturerToCourseInDb(lecturer: Lecturer, courseId: number): Promise<void>
	AddStudentToDb(student: Student): Promise<void>
	AddLecturerToDb(lecturer: Lecturer): Promise<void>
	AddCourseStatisticsToDb(courseStatistics: CourseStatistics): Promise<void>
	GetCourseByIdFromDb(id: number): Promise<Course>
	GetStudentByIdFromDb(id: number): Promise<Student>
	GetLecturerByIdFromDb(id: number): Promise<Lecturer>
	GetCoursesFromDb(): Promise<Course[]>
	GetStudentsFromDb(): Promise<Student[]>
	GetLecturersFromDb(): Promise<Lecturer[]>
	GetCourseStatisticsFromDb(courseId: number): Promise<CourseStatistics[]>
}
