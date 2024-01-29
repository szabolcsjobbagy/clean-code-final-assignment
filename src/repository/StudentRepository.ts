import { IDbClient } from "../abstraction/clients/IDbClient.js"
import { IStudentRepository } from "../abstraction/repository/IStudentRepository.js"
import { NetworkError } from "../errors/networkError.js"
import { NotFoundError } from "../errors/notFoundError.js"
import { CourseStatistics } from "../models/CourseStatistics.js"
import { Student } from "../models/Student.js"

export class StudentRepository implements IStudentRepository {
	constructor(private dbClient: IDbClient) {}

	async AddStudent(student: Student): Promise<void> {
		try {
			await this.dbClient.AddStudentToDb(student)
			console.log(`Student ${student.GetId()} added to database.`)
		} catch (error) {
			throw new NetworkError("Database client not accessible.", error as Error)
		}
	}

	async GetStudentById(id: number): Promise<Student | undefined> {
		try {
			return await this.dbClient.GetStudentByIdFromDb(id)
		} catch (error) {
			if (error instanceof NotFoundError) {
				throw new NotFoundError(`Student ${id} not found in database.`)
			}
			throw new NetworkError("Database client not accessible.", error as Error)
		}
	}

	async GetStudents(): Promise<Student[]> {
		try {
			return await this.dbClient.GetStudentsFromDb()
		} catch (error) {
			throw new NetworkError("Database client not accessible.", error as Error)
		}
	}

	async GetCourseStatisticsByStudentId(studentId: number): Promise<CourseStatistics[]> {
		try {
			return await this.dbClient.GetCourseStatisticsByStudentIdFromDb(studentId)
		} catch (error) {
			throw new NetworkError("Database client not accessible.", error as Error)
		}
	}
}
