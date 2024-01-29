import { IDbClient } from "../abstraction/clients/IDbClient.js"
import { ICourseStatisticsRepository } from "../abstraction/repository/ICourseStatisticsRepository.js"
import { NetworkError } from "../errors/networkError.js"
import { NotFoundError } from "../errors/notFoundError.js"
import { CourseStatistics } from "../models/CourseStatistics.js"

export class CourseStatisticsRepository implements ICourseStatisticsRepository {
	constructor(private dbClient: IDbClient) {}

	async AddCourseStatistics(courseStatistics: CourseStatistics): Promise<void> {
		try {
			await this.dbClient.AddCourseStatisticsToDb(courseStatistics)
			console.log(`Course Statistics ${courseStatistics.GetId()} added to database.`)
		} catch (error) {
			throw new NetworkError("Database client not accessible.", error as Error)
		}
	}

	async GetCourseStatisticsById(id: number): Promise<CourseStatistics | undefined> {
		try {
			return await this.dbClient.GetCourseStatisticsByIdFromDb(id)
		} catch (error) {
			if (error instanceof NotFoundError) {
				throw new NotFoundError(`Course Statistics ${id} not found in database.`)
			}
			throw new NetworkError("Database client not accessible.", error as Error)
		}
	}

	async GetCourseStatistics(): Promise<CourseStatistics[]> {
		try {
			return await this.dbClient.GetCourseStatisticsFromDb()
		} catch (error) {
			throw new NetworkError("Database client not accessible.", error as Error)
		}
	}
}
