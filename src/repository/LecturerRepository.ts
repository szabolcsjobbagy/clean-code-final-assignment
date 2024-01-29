import { IDbClient } from "../abstraction/clients/IDbClient.js"
import { ILecturerRepository } from "../abstraction/repository/ILecturerRepository.js"
import { NetworkError } from "../errors/networkError.js"
import { NotFoundError } from "../errors/notFoundError.js"
import { Lecturer } from "../models/Lecturer.js"

export class LecturerRepository implements ILecturerRepository {
	constructor(private dbClient: IDbClient) {}

	async AddLecturer(lecturer: Lecturer): Promise<void> {
		try {
			await this.dbClient.AddLecturerToDb(lecturer)
			console.log(`Lecturer ${lecturer.GetId()} added to database.`)
		} catch (error) {
			throw new NetworkError("Database client not accessible.", error as Error)
		}
	}

	async GetLecturerById(id: number): Promise<Lecturer | undefined> {
		try {
			return await this.dbClient.GetLecturerByIdFromDb(id)
		} catch (error) {
			if (error instanceof NotFoundError) {
				throw new NotFoundError(`Lecturer ${id} not found in database.`)
			}
			throw new NetworkError("Database client not accessible.", error as Error)
		}
	}

	async GetLecturers(): Promise<Lecturer[]> {
		try {
			return await this.dbClient.GetLecturersFromDb()
		} catch (error) {
			throw new NetworkError("Database client not accessible.", error as Error)
		}
	}
}
