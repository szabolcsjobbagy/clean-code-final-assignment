import { Course } from "../models/Course.js"
import { IDbClient } from "../abstraction/clients/IDbClient.js"
import { CourseStatistics } from "../models/CourseStatistics.js"
import { Student } from "../models/Student.js"
import { Lecturer } from "../models/Lecturer.js"
import { NetworkError } from "../errors/networkError.js"

export class DbClient implements IDbClient {
	async AddCourseToDb(course: Course): Promise<void> {
		try {
			// Add item to database
		} catch (error) {
			throw new NetworkError("Database not accessible.", error as Error)
		}
	}

	async AddStudentToCourseInDb(student: Student, courseId: number): Promise<void> {
		try {
			// Update item in database
		} catch (error) {
			throw new NetworkError("Database not accessible.", error as Error)
		}
	}

	async AddLecturerToCourseInDb(lecturer: Lecturer, courseId: number): Promise<void> {
		try {
			// Update item in database
		} catch (error) {
			throw new NetworkError("Database not accessible.", error as Error)
		}
	}

	async AddStudentToDb(student: Student): Promise<void> {
		try {
			// Add item to database
		} catch (error) {
			throw new NetworkError("Database not accessible.", error as Error)
		}
	}

	async AddLecturerToDb(lecturer: Lecturer): Promise<void> {
		try {
			// Add item to database
		} catch (error) {
			throw new NetworkError("Database not accessible.", error as Error)
		}
	}

	async AddCourseStatisticsToDb(courseStatistics: CourseStatistics): Promise<void> {
		try {
			// Add item to database
		} catch (error) {
			throw new NetworkError("Database not accessible.", error as Error)
		}
	}

	async GetCourseByIdFromDb(id: number): Promise<Course | undefined> {
		try {
			// Get item from database
			return new Course(1, "TypeScript BASICS", 45000, 4, new Date("2024-01-12"))
		} catch (error) {
			throw new NetworkError("Database not accessible.", error as Error)
		}
	}

	async GetStudentByIdFromDb(id: number): Promise<Student | undefined> {
		try {
			// Get item from database
			return new Student(
				1,
				"Trainee Smith",
				new Date("1999-05-04"),
				"male",
				"trainee.smith@gmail.com",
				"+36301234567"
			)
		} catch (error) {
			throw new NetworkError("Database not accessible.", error as Error)
		}
	}

	async GetLecturerByIdFromDb(id: number): Promise<Lecturer | undefined> {
		try {
			// Get item from database
			return new Lecturer(
				1,
				"Trainer Taylor",
				new Date("1986-01-01"),
				"female",
				"trainer.taylor@gmail.com",
				"+36203539854"
			)
		} catch (error) {
			throw new NetworkError("Database not accessible.", error as Error)
		}
	}

	async GetCoursesFromDb(): Promise<Course[]> {
		try {
			// Get item from database
			return [
				new Course(1, "TypeScript BASICS", 45000, 4, new Date("2024-01-12")),
				new Course(2, "TypeScript ADVANCED", 65000, 4, new Date("2024-02-10")),
			]
		} catch (error) {
			throw new NetworkError("Database not accessible.", error as Error)
		}
	}

	async GetStudentsFromDb(): Promise<Student[]> {
		try {
			// Get item from database
			return [
				new Student(
					1,
					"Trainee Smith",
					new Date("1999-05-04"),
					"male",
					"trainee.smith@gmail.com",
					"+36301234567"
				),
				new Student(
					2,
					"Trainee Newton",
					new Date("2001-08-09"),
					"female",
					"trainee.newton@gmail.com",
					"+36709373495"
				),
			]
		} catch (error) {
			throw new NetworkError("Database not accessible.", error as Error)
		}
	}

	async GetLecturersFromDb(): Promise<Lecturer[]> {
		try {
			// Get item from database
			return [
				new Lecturer(
					1,
					"Trainer Taylor",
					new Date("1986-01-01"),
					"female",
					"trainer.taylor@gmail.com",
					"+36203539854"
				),
				new Lecturer(
					2,
					"Trainer Brown",
					new Date("1986-01-01"),
					"male",
					"trainer.brown@gmail.com",
					"+36208265385"
				),
			]
		} catch (error) {
			throw new NetworkError("Database not accessible.", error as Error)
		}
	}

	async GetCourseStatisticsByIdFromDb(
		courseStatisticsId: number
	): Promise<CourseStatistics | undefined> {
		try {
			// Get item from database
			return new CourseStatistics(1, 1, 1, 0, 0, new Date("2024-01-12"))
		} catch (error) {
			throw new NetworkError("Database not accessible.", error as Error)
		}
	}

	async GetCourseStatisticsByStudentIdFromDb(studentId: number): Promise<CourseStatistics[]> {
		try {
			// Get item from database
			return [new CourseStatistics(1, 1, 1, 0, 0, new Date("2024-01-12"))]
		} catch (error) {
			throw new NetworkError("Database not accessible.", error as Error)
		}
	}

	async GetCourseStatisticsByCourseIdFromDb(courseId: number): Promise<CourseStatistics[]> {
		try {
			// Get item from database
			return [new CourseStatistics(1, 1, 1, 0, 0, new Date("2024-01-12"))]
		} catch (error) {
			throw new NetworkError("Database not accessible.", error as Error)
		}
	}

	async GetCourseStatisticsFromDb(): Promise<CourseStatistics[]> {
		try {
			// Get item from database
			return [
				new CourseStatistics(1, 1, 1, 0, 0, new Date("2024-01-12")),
				new CourseStatistics(2, 2, 2, 0, 0, new Date("2024-02-10")),
			]
		} catch (error) {
			throw new NetworkError("Database not accessible.", error as Error)
		}
	}
}
