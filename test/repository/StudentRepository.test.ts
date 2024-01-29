import { mock, mockReset } from "jest-mock-extended"

import { StudentRepository } from "../../src/repository/StudentRepository.js"
import { NetworkError } from "../../src/errors/networkError.js"
import { NotFoundError } from "../../src/errors/notFoundError.js"
import { IDbClient } from "../../src/abstraction/clients/IDbClient.js"
import { Student } from "../../src/models/Student.js"
import { CourseStatistics } from "../../src/models/CourseStatistics.js"

let sut: StudentRepository

const mockedDbClient = mock<IDbClient>()

beforeEach(() => {
	mockReset(mockedDbClient)

	sut = new StudentRepository(mockedDbClient)
})

describe("StudentRepository", () => {
	describe("AddStudent", () => {
		const student = new Student(
			1,
			"Trainee Smith",
			new Date("1999-05-04"),
			"male",
			"trainee.smith@gmail.com",
			"+36301234567"
		)
		const mockedMethod = mockedDbClient.AddStudentToDb

		describe("Happy paths", () => {
			it("should add Student to database", async () => {
				// Arrange
				mockedMethod.mockResolvedValue()
				const consoleLogSpy = jest.spyOn(console, "log")
				const expectedLoggedMessage = `Student ${student.GetId()} added to database.`

				// Act
				await sut.AddStudent(student)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(student)
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
				await expect(sut.AddStudent(student)).rejects.toThrow(expectedError)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(student)
				expect(mockedMethod).toHaveBeenCalledTimes(1)
			})
		})
	})

	describe("GetStudentById", () => {
		const studentId = 1
		const mockedMethod = mockedDbClient.GetStudentByIdFromDb

		describe("Happy paths", () => {
			it("should get Student from database", async () => {
				// Arrange
				const student = new Student(
					1,
					"Trainee Smith",
					new Date("1999-05-04"),
					"male",
					"trainee.smith@gmail.com",
					"+36301234567"
				)

				mockedMethod.mockResolvedValue(student)

				// Act
				const result = await sut.GetStudentById(studentId)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(studentId)
				expect(mockedMethod).toHaveBeenCalledTimes(1)
				expect(result).toBe(student)
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
				await expect(sut.GetStudentById(studentId)).rejects.toThrow(expectedError)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(studentId)
				expect(mockedMethod).toHaveBeenCalledTimes(1)
			})

			it("should throw a Not Found error if student is not found in database", async () => {
				// Arrange
				const originalError = new NotFoundError(".....")
				mockedDbClient.GetStudentByIdFromDb.mockRejectedValue(originalError)
				const customErrorMessage = `Student ${studentId} not found in database.`
				const expectedError = new NotFoundError(customErrorMessage)

				// Act & Assert
				await expect(sut.GetStudentById(studentId)).rejects.toThrow(expectedError)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(studentId)
				expect(mockedMethod).toHaveBeenCalledTimes(1)
			})
		})
	})

	describe("GetStudents", () => {
		const students = [
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
		const mockedMethod = mockedDbClient.GetStudentsFromDb

		describe("Happy paths", () => {
			it("should get all Students from database", async () => {
				// Arrange
				mockedMethod.mockResolvedValue(students)

				// Act
				const result = await sut.GetStudents()

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith()
				expect(mockedMethod).toHaveBeenCalledTimes(1)
				expect(result).toBe(students)
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
				await expect(sut.GetStudents()).rejects.toThrow(expectedError)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith()
				expect(mockedMethod).toHaveBeenCalledTimes(1)
			})
		})
	})

	describe("GetCourseStatisticsByStudentId", () => {
		const studentId = 1
		const mockedMethod = mockedDbClient.GetCourseStatisticsByStudentIdFromDb

		describe("Happy paths", () => {
			it("should get Student from database", async () => {
				// Arrange
				const courseStatistics = [
					new CourseStatistics(1, 1, 1, 0, 0, new Date("2024-01-12")),
				]

				mockedMethod.mockResolvedValue(courseStatistics)

				// Act
				const result = await sut.GetCourseStatisticsByStudentId(studentId)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(studentId)
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
				await expect(sut.GetCourseStatisticsByStudentId(studentId)).rejects.toThrow(
					expectedError
				)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(studentId)
				expect(mockedMethod).toHaveBeenCalledTimes(1)
			})
		})
	})
})
