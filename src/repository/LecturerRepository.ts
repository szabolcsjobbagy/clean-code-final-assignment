import { IDbClient } from "../abstraction/clients/IDbClient"
import { ILecturerRepository } from "../abstraction/repository/ILecturerRepository"
import { Lecturer } from "../models/Lecturer"

export class LecturerRepository implements ILecturerRepository {
	constructor(private dbClient: IDbClient) {}

	async AddLecturer(lecturer: Lecturer): Promise<void> {
		await this.dbClient.AddLecturerToDb(lecturer)
	}

	async GetLecturerById(id: number): Promise<Lecturer | undefined> {
		return await this.dbClient.GetLecturerByIdFromDb(id)
	}

	async GetLecturers(): Promise<Lecturer[]> {
		return await this.dbClient.GetLecturersFromDb()
	}
}
