import { IDbClient } from "../abstraction/clients/IDbClient"
import { ICourseStatisticsRepository } from "../abstraction/repository/ICourseStatisticsRepository"
import { CourseStatistics } from "../models/CourseStatistics"

export class CourseStatisticsRepository implements ICourseStatisticsRepository {
	constructor(private dbClient: IDbClient) {}

	async AddCourseStatistics(courseStatistics: CourseStatistics): Promise<void> {
		await this.dbClient.AddCourseStatisticsToDb(courseStatistics)
	}

	async GetCourseStatisticsById(courseStatisticsId: number): Promise<CourseStatistics[]> {
		return await this.dbClient.GetCourseStatisticsFromDb(courseStatisticsId)
	}
}
