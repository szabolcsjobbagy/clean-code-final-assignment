import { Course } from "../models/Course.js"
import { IDbClient } from "../abstraction/clients/IDbClient.js"
import { CourseStatistics } from "../models/CourseStatistics.js"
import { Student } from "../models/Student.js"
import { Lecturer } from "../models/Lecturer.js"

export class DbClient implements IDbClient {
	async AddCourseToDb(course: Course): Promise<void> {
		console.log(`Course ${course.GetId()} - ${course.GetName()} added to database.`)
	}

	async AddStudentToCourseInDb(student: Student, courseId: number): Promise<void> {
		console.log(
			`Student ${student.GetId()} - ${student.GetName()} added to course ${courseId} in database.`
		)
	}

	async AddLecturerToCourseInDb(lecturer: Lecturer, courseId: number): Promise<void> {
		console.log(
			`Lecturer ${lecturer.GetId()} - ${lecturer.GetName()} added to course ${courseId} in database.`
		)
	}

	async AddStudentToDb(student: Student): Promise<void> {
		console.log(`Student ${student.GetId()} - ${student.GetName()} added to database.`)
	}

	async AddLecturerToDb(lecturer: Lecturer): Promise<void> {
		console.log(`Lecturer ${lecturer.GetId()} - ${lecturer.GetName()} added to database.`)
	}

	async AddCourseStatisticsToDb(courseStatistics: CourseStatistics): Promise<void> {
		console.log(`Course Statistics ${courseStatistics.GetId()} added to database.`)
	}

	async GetCourseByIdFromDb(id: number): Promise<Course> {
		if (id == 1) return new Course(1, "TypeScript BASICS", 45000, 4, new Date("2024-01-12"))
		return new Course(2, "TypeScript ADVANCED", 65000, 4, new Date("2024-02-10"))
	}

	async GetStudentByIdFromDb(id: number): Promise<Student> {
		if (id == 1)
			return new Student(
				1,
				"Trainee Smith",
				new Date("1999-05-04"),
				"male",
				"trainee.smith@gmail.com",
				"+36301234567"
			)
		return new Student(
			2,
			"Trainee Newton",
			new Date("2001-08-09"),
			"female",
			"trainee.newton@gmail.com",
			"+36709373495"
		)
	}

	async GetLecturerByIdFromDb(id: number): Promise<Lecturer> {
		if (id == 1)
			return new Lecturer(
				1,
				"Trainer Taylor",
				new Date("1986-01-01"),
				"female",
				"trainer.taylor@gmail.com",
				"+36203539854"
			)
		return new Lecturer(
			2,
			"Trainer Brown",
			new Date("1986-01-01"),
			"male",
			"trainer.brown@gmail.com",
			"+36208265385"
		)
	}

	async GetCoursesFromDb(): Promise<Course[]> {
		return [
			new Course(1, "TypeScript BASICS", 45000, 4, new Date("2024-01-12")),
			new Course(2, "TypeScript ADVANCED", 65000, 4, new Date("2024-02-10")),
		]
	}

	async GetStudentsFromDb(): Promise<Student[]> {
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
	}

	async GetLecturersFromDb(): Promise<Lecturer[]> {
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
	}

	async GetCourseStatisticsFromDb(courseId: number): Promise<CourseStatistics[]> {
		if (courseId == 1) return [new CourseStatistics(1, 1, 1, 0, 0, new Date("2024-01-12"))]
		return [new CourseStatistics(2, 2, 2, 0, 0, new Date("2024-02-10"))]
	}
}
