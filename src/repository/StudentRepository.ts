import { ICourseRepository } from "../abstraction/repository/ICourseRepository"
import { Course } from "../models/Course"
import { CourseStatistic } from "../models/CourseStatistic"

export class CourseRepository implements ICourseRepository {
	AddCourse(course: Course): Promise<void> {
		throw new Error("Method not implemented.")
	}

	GetCourseByName(courseName: string): Promise<Course | undefined> {
		throw new Error("Method not implemented.")
	}

	GetCourses(): Promise<Course[]> {
		throw new Error("Method not implemented.")
	}

	GetCourseStatistics(courseName: string): Promise<CourseStatistic> {
		throw new Error("Method not implemented.")
	}
}
