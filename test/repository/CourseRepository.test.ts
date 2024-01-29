import { mock, mockReset } from "jest-mock-extended"

import { CourseRepository } from "../../src/repository/CourseRepository.js"
import { NetworkError } from "../../src/errors/networkError.js"
import { NotFoundError } from "../../src/errors/notFoundError.js"
import { IDbClient } from "../../src/abstraction/clients/IDbClient.js"
import { Course } from "../../src/models/Course.js"
import { CourseStatistics } from "../../src/models/CourseStatistics.js"
import { Student } from "../../src/models/Student.js"
import { Lecturer } from "../../src/models/Lecturer.js"

let sut: CourseRepository

const mockedDbClient = mock<IDbClient>()

beforeEach(() => {
	mockReset(mockedDbClient)

	sut = new CourseRepository(mockedDbClient)
})

describe("CourseRepository", () => {
	describe("AddCourse", () => {
		const course = new Course(1, "TypeScript BASICS", 45000, 4, new Date("2024-01-12"))
		const mockedMethod = mockedDbClient.AddCourseToDb

		describe("Happy paths", () => {
			it("should add Course to database", async () => {
				// Arrange
				mockedMethod.mockResolvedValue()
				const consoleLogSpy = jest.spyOn(console, "log")
				const expectedLoggedMessage = `Course ${course.GetId()} added to database.`

				// Act
				await sut.AddCourse(course)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(course)
				expect(mockedMethod).toHaveBeenCalledTimes(1)
				expect(consoleLogSpy).toHaveBeenCalledWith(expectedLoggedMessage)
			})
		})

		describe("Error paths", () => {
			it("should throw an error if db client is not accessible", async () => {
				// Arrange
				const originalError = new Error(".....")
				mockedMethod.mockRejectedValue(originalError)
				const customErrorMessage = "Database client not accessible."
				const expectedError = new NetworkError(customErrorMessage)

				// Act & Assert
				await expect(sut.AddCourse(course)).rejects.toThrow(expectedError)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(course)
				expect(mockedMethod).toHaveBeenCalledTimes(1)
			})
		})
	})

	describe("AddStudentToCourse", () => {
		const student = new Student(
			1,
			"Trainee Smith",
			new Date("1999-05-04"),
			"male",
			"trainee.smith@gmail.com",
			"+36301234567"
		)
		const courseId = 1
		const mockedMethod = mockedDbClient.AddStudentToCourseInDb

		describe("Happy paths", () => {
			it("should add Student to Course to database", async () => {
				// Arrange
				mockedMethod.mockResolvedValue()
				const consoleLogSpy = jest.spyOn(console, "log")
				const expectedLoggedMessage = `Student ${student.GetId()} added to course ${courseId} in database.`

				// Act
				await sut.AddStudentToCourse(student, courseId)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(student, courseId)
				expect(mockedMethod).toHaveBeenCalledTimes(1)
				expect(consoleLogSpy).toHaveBeenCalledWith(expectedLoggedMessage)
			})
		})

		describe("Error paths", () => {
			it("should throw an error if db client is not accessible", async () => {
				// Arrange
				const originalError = new Error(".....")
				mockedMethod.mockRejectedValue(originalError)
				const customErrorMessage = "Database client not accessible."
				const expectedError = new NetworkError(customErrorMessage)

				// Act & Assert
				await expect(sut.AddStudentToCourse(student, courseId)).rejects.toThrow(
					expectedError
				)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(student, courseId)
				expect(mockedMethod).toHaveBeenCalledTimes(1)
			})
		})
	})

	describe("AddLecturerToCourse", () => {
		const lecturer = new Lecturer(
			1,
			"Trainer Taylor",
			new Date("1986-01-01"),
			"female",
			"trainer.taylor@gmail.com",
			"+36203539854"
		)
		const courseId = 1
		const mockedMethod = mockedDbClient.AddLecturerToCourseInDb

		describe("Happy paths", () => {
			it("should add Lecturer to Course to database", async () => {
				// Arrange
				mockedMethod.mockResolvedValue()
				const consoleLogSpy = jest.spyOn(console, "log")
				const expectedLoggedMessage = `Lecturer ${lecturer.GetId()} added to course ${courseId} in database.`

				// Act
				await sut.AddLecturerToCourse(lecturer, courseId)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(lecturer, courseId)
				expect(mockedMethod).toHaveBeenCalledTimes(1)
				expect(consoleLogSpy).toHaveBeenCalledWith(expectedLoggedMessage)
			})
		})

		describe("Error paths", () => {
			it("should throw an error if db client is not accessible", async () => {
				// Arrange
				const originalError = new Error(".....")
				mockedMethod.mockRejectedValue(originalError)
				const customErrorMessage = "Database client not accessible."
				const expectedError = new NetworkError(customErrorMessage)

				// Act & Assert
				await expect(sut.AddLecturerToCourse(lecturer, courseId)).rejects.toThrow(
					expectedError
				)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(lecturer, courseId)
				expect(mockedMethod).toHaveBeenCalledTimes(1)
			})
		})
	})

	describe("GetCourseById", () => {
		const courseId = 1
		const mockedMethod = mockedDbClient.GetCourseByIdFromDb

		describe("Happy paths", () => {
			it("should get Course from database", async () => {
				// Arrange
				const course = new Course(1, "TypeScript BASICS", 45000, 4, new Date("2024-01-12"))

				mockedMethod.mockResolvedValue(course)

				// Act
				const result = await sut.GetCourseById(courseId)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(courseId)
				expect(mockedMethod).toHaveBeenCalledTimes(1)
				expect(result).toBe(course)
			})
		})

		describe("Error paths", () => {
			it("should throw a Network error if db client is not accessible", async () => {
				// Arrange
				const originalError = new Error(".....")
				mockedMethod.mockRejectedValue(originalError)
				const customErrorMessage = "Database client not accessible."
				const expectedError = new NetworkError(customErrorMessage)

				// Act & Assert
				await expect(sut.GetCourseById(courseId)).rejects.toThrow(expectedError)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(courseId)
				expect(mockedMethod).toHaveBeenCalledTimes(1)
			})

			it("should throw a Not Found error if course is not found in database", async () => {
				// Arrange
				const originalError = new NotFoundError(".....")
				mockedDbClient.GetCourseByIdFromDb.mockRejectedValue(originalError)
				const customErrorMessage = `Course ${courseId} not found in database.`
				const expectedError = new NotFoundError(customErrorMessage)

				// Act & Assert
				await expect(sut.GetCourseById(courseId)).rejects.toThrow(expectedError)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(courseId)
				expect(mockedMethod).toHaveBeenCalledTimes(1)
			})
		})
	})

	describe("GetCourses", () => {
		const courses = [
			new Course(1, "TypeScript BASICS", 45000, 4, new Date("2024-01-12")),
			new Course(2, "TypeScript ADVANCED", 65000, 4, new Date("2024-02-10")),
		]
		const mockedMethod = mockedDbClient.GetCoursesFromDb

		describe("Happy paths", () => {
			it("should get all Courses from database", async () => {
				// Arrange
				mockedMethod.mockResolvedValue(courses)

				// Act
				const result = await sut.GetCourses()

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith()
				expect(mockedMethod).toHaveBeenCalledTimes(1)
				expect(result).toBe(courses)
			})
		})

		describe("Error paths", () => {
			it("should throw a Network error if db client is not accessible", async () => {
				// Arrange
				const originalError = new Error(".....")
				mockedMethod.mockRejectedValue(originalError)
				const customErrorMessage = "Database client not accessible."
				const expectedError = new NetworkError(customErrorMessage)

				// Act & Assert
				await expect(sut.GetCourses()).rejects.toThrow(expectedError)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith()
				expect(mockedMethod).toHaveBeenCalledTimes(1)
			})
		})
	})

	describe("GetCourseStatisticsByCourseId", () => {
		const courseId = 1
		const mockedMethod = mockedDbClient.GetCourseStatisticsByCourseIdFromDb

		describe("Happy paths", () => {
			it("should get Course from database", async () => {
				// Arrange
				const courseStatistics = [
					new CourseStatistics(1, 1, 1, 0, 0, new Date("2024-01-12")),
				]

				mockedMethod.mockResolvedValue(courseStatistics)

				// Act
				const result = await sut.GetCourseStatisticsByCourseId(courseId)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(courseId)
				expect(mockedMethod).toHaveBeenCalledTimes(1)
				expect(result).toBe(courseStatistics)
			})
		})

		describe("Error paths", () => {
			it("should throw a Network error if db client is not accessible", async () => {
				// Arrange
				const originalError = new Error(".....")
				mockedMethod.mockRejectedValue(originalError)
				const customErrorMessage = "Database client not accessible."
				const expectedError = new NetworkError(customErrorMessage)

				// Act & Assert
				await expect(sut.GetCourseStatisticsByCourseId(courseId)).rejects.toThrow(
					expectedError
				)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(courseId)
				expect(mockedMethod).toHaveBeenCalledTimes(1)
			})
		})
	})
})
