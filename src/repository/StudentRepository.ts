import { IDbClient } from "../abstraction/clients/IDbClient"
import { IStudentRepository } from "../abstraction/repository/IStudentRepository"
import { Student } from "../models/Student"

export class StudentRepository implements IStudentRepository {
	constructor(private dbClient: IDbClient) {}

	async AddStudent(student: Student): Promise<void> {
		await this.dbClient.AddStudentToDb(student)
	}

	async GetStudentById(id: number): Promise<Student | undefined> {
		return await this.dbClient.GetStudentByIdFromDb(id)
	}

	async GetStudents(): Promise<Student[]> {
		return await this.dbClient.GetStudentsFromDb()
	}
}
