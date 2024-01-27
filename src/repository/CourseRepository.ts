import { IDbClient } from "../abstraction/clients/IDbClient"
import { ICourseRepository } from "../abstraction/repository/ICourseRepository"
import { Course } from "../models/Course"
import { CourseStatistics } from "../models/CourseStatistics"
import { Lecturer } from "../models/Lecturer"
import { Student } from "../models/Student"

export class CourseRepository implements ICourseRepository {
	constructor(private dbClient: IDbClient) {}

	async AddCourse(course: Course): Promise<void> {
		await this.dbClient.AddCourseToDb(course)
	}

	async AddStudentToCourse(student: Student, courseId: number): Promise<void> {
		await this.dbClient.AddStudentToCourseInDb(student, courseId)
	}

	async AddLecturerToCourse(lecturer: Lecturer, courseId: number): Promise<void> {
		await this.dbClient.AddLecturerToCourseInDb(lecturer, courseId)
	}

	async GetCourseById(id: number): Promise<Course | undefined> {
		return await this.dbClient.GetCourseByIdFromDb(id)
	}

	async GetCourses(): Promise<Course[]> {
		return await this.dbClient.GetCoursesFromDb()
	}

	async GetCourseStatisticsById(courseId: number): Promise<CourseStatistics[]> {
		return await this.dbClient.GetCourseStatisticsFromDb(courseId)
	}
}
