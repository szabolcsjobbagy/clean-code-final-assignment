import { Course } from "../../src/models/Course.js"
import { Student } from "../../src/models/Student.js"
import { Lecturer } from "../../src/models/Lecturer.js"

describe("Course", () => {
	let course: Course
	let student: Student
	let lecturer: Lecturer

	beforeEach(() => {
		course = new Course(1, "TypeScript BASICS", 45000, 4, new Date("2024-01-12"))
		student = new Student(
			1,
			"Trainee Smith",
			new Date("1999-05-04"),
			"male",
			"trainee.smith@gmail.com",
			"+36301234567"
		)
		lecturer = new Lecturer(
			1,
			"Trainer Taylor",
			new Date("1986-01-01"),
			"female",
			"trainer.taylor@gmail.com",
			"+36203539854"
		)
	})

	it("should add a student to the course", () => {
		course.AddStudentToCourse(student)
		expect(course.GetStudents()).toContain(student)
	})

	it("should add a lecturer to the course", () => {
		course.AddLecturerToCourse(lecturer)
		expect(course.GetLecturers()).toContain(lecturer)
	})

	it("should return the course ID", () => {
		expect(course.GetId()).toBe(1)
	})

	it("should return the course name", () => {
		expect(course.GetName()).toBe("TypeScript BASICS")
	})

	it("should return the course cost in HUF", () => {
		expect(course.GetCostInHuf()).toBe(45000)
	})

	it("should return the course length in weeks", () => {
		expect(course.GetLengthInWeeks()).toBe(4)
	})

	it("should return the course start date", () => {
		expect(course.GetStartDate()).toEqual(new Date("2024-01-12"))
	})
})
