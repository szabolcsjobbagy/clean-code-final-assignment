import { IDbClient } from "../abstraction/clients/IDbClient"
import { ICourseRepository } from "../abstraction/repository/ICourseRepository"
import { Course } from "../models/Course"
import { CourseStatistics } from "../models/CourseStatistics"

export class CourseRepository implements ICourseRepository {
	constructor(private dbClient: IDbClient) {}

	async AddCourse(course: Course): Promise<void> {
		await this.dbClient.AddCourse(course)
	}

	async GetCourseById(courseId: number): Promise<Course | undefined> {
		return await this.dbClient.GetCourseById(courseId)
	}

	GetCourses(): Promise<Course[]> {
		throw new Error("Method not implemented.")
	}

	GetCourseStatistics(courseId: number): Promise<CourseStatistics> {
		throw new Error("Method not implemented.")
	}
}
