import { IDbClient } from "../abstraction/clients/IDbClient.js"
import { ICourseRepository } from "../abstraction/repository/ICourseRepository.js"
import { NetworkError } from "../errors/networkError.js"
import { NotFoundError } from "../errors/notFoundError.js"
import { Course } from "../models/Course.js"
import { CourseStatistics } from "../models/CourseStatistics.js"
import { Lecturer } from "../models/Lecturer.js"
import { Student } from "../models/Student.js"

export class CourseRepository implements ICourseRepository {
	constructor(private dbClient: IDbClient) {}

	async AddCourse(course: Course): Promise<void> {
		try {
			await this.dbClient.AddCourseToDb(course)
			console.log(`Course ${course.GetId()} added to database.`)
		} catch (error) {
			throw new NetworkError("Database client not accessible.", error as Error)
		}
	}

	async AddStudentToCourse(student: Student, courseId: number): Promise<void> {
		try {
			await this.dbClient.AddStudentToCourseInDb(student, courseId)
			console.log(`Student ${student.GetId()} added to course ${courseId} in database.`)
		} catch (error) {
			throw new NetworkError("Database client not accessible.", error as Error)
		}
	}

	async AddLecturerToCourse(lecturer: Lecturer, courseId: number): Promise<void> {
		try {
			await this.dbClient.AddLecturerToCourseInDb(lecturer, courseId)
			console.log(`Lecturer ${lecturer.GetId()} added to course ${courseId} in database.`)
		} catch (error) {
			throw new NetworkError("Database client not accessible.", error as Error)
		}
	}

	async GetCourseById(id: number): Promise<Course | undefined> {
		try {
			return await this.dbClient.GetCourseByIdFromDb(id)
		} catch (error) {
			if (error instanceof NotFoundError) {
				throw new NotFoundError(`Course ${id} not found in database.`)
			}
			throw new NetworkError("Database client not accessible.", error as Error)
		}
	}

	async GetCourses(): Promise<Course[]> {
		try {
			return await this.dbClient.GetCoursesFromDb()
		} catch (error) {
			throw new NetworkError("Database client not accessible.", error as Error)
		}
	}

	async GetCourseStatisticsByCourseId(courseId: number): Promise<CourseStatistics[]> {
		try {
			return await this.dbClient.GetCourseStatisticsByCourseIdFromDb(courseId)
		} catch (error) {
			throw new NetworkError("Database client not accessible.", error as Error)
		}
	}
}
