import { Course } from "../models/Course.js"
import { IDbClient } from "../abstraction/clients/IDbClient.js"
import { CourseStatistics } from "../models/CourseStatistics.js"

export class DbClient implements IDbClient {
	async AddCourse(course: Course): Promise<void> {
		console.log(`Item ${course.GetName()} added to database.`)
	}

	async GetCourseById(courseId: number): Promise<Course> {
		return new Course(1, "TypeScript Basics", 45000, 4, new Date("2024-01-12"))
	}

	async GetCourses(): Promise<Course[]> {
		return [
			new Course(1, "TypeScript Basics", 45000, 4, new Date("2024-01-12")),
			new Course(2, "TypeScript Advanced", 65000, 4, new Date("2024-02-10")),
		]
	}

	async GetCourseStatistics(courseId: number): Promise<CourseStatistics> {
		return new CourseStatistics(1, 10, 5, 50, new Date("2024-01-12"))
	}
}
