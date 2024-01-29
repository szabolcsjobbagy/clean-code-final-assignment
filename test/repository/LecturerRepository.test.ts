import { mock, mockReset } from "jest-mock-extended"

import { LecturerRepository } from "../../src/repository/LecturerRepository.js"
import { NetworkError } from "../../src/errors/networkError.js"
import { NotFoundError } from "../../src/errors/notFoundError.js"
import { IDbClient } from "../../src/abstraction/clients/IDbClient.js"
import { Lecturer } from "../../src/models/Lecturer.js"
import { CourseStatistics } from "../../src/models/CourseStatistics.js"

let sut: LecturerRepository

const mockedDbClient = mock<IDbClient>()

beforeEach(() => {
	mockReset(mockedDbClient)

	sut = new LecturerRepository(mockedDbClient)
})

describe("LecturerRepository", () => {
	describe("AddLecturer", () => {
		const lecturer = new Lecturer(
			1,
			"Trainer Taylor",
			new Date("1986-01-01"),
			"female",
			"trainer.taylor@gmail.com",
			"+36203539854"
		)
		const mockedMethod = mockedDbClient.AddLecturerToDb

		describe("Happy paths", () => {
			it("should add Lecturer to database", async () => {
				// Arrange
				mockedMethod.mockResolvedValue()
				const consoleLogSpy = jest.spyOn(console, "log")
				const expectedLoggedMessage = `Lecturer ${lecturer.GetId()} added to database.`

				// Act
				await sut.AddLecturer(lecturer)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(lecturer)
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
				await expect(sut.AddLecturer(lecturer)).rejects.toThrow(expectedError)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(lecturer)
				expect(mockedMethod).toHaveBeenCalledTimes(1)
			})
		})
	})

	describe("GetLecturerById", () => {
		const lecturerId = 1
		const mockedMethod = mockedDbClient.GetLecturerByIdFromDb

		describe("Happy paths", () => {
			it("should get Lecturer from database", async () => {
				// Arrange
				const lecturer = new Lecturer(
					1,
					"Trainer Taylor",
					new Date("1986-01-01"),
					"female",
					"trainer.taylor@gmail.com",
					"+36203539854"
				)

				mockedMethod.mockResolvedValue(lecturer)

				// Act
				const result = await sut.GetLecturerById(lecturerId)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(lecturerId)
				expect(mockedMethod).toHaveBeenCalledTimes(1)
				expect(result).toBe(lecturer)
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
				await expect(sut.GetLecturerById(lecturerId)).rejects.toThrow(expectedError)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(lecturerId)
				expect(mockedMethod).toHaveBeenCalledTimes(1)
			})

			it("should throw a Not Found error if lecturer is not found in database", async () => {
				// Arrange
				const originalError = new NotFoundError(".....")
				mockedDbClient.GetLecturerByIdFromDb.mockRejectedValue(originalError)
				const customErrorMessage = `Lecturer ${lecturerId} not found in database.`
				const expectedError = new NotFoundError(customErrorMessage)

				// Act & Assert
				await expect(sut.GetLecturerById(lecturerId)).rejects.toThrow(expectedError)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(lecturerId)
				expect(mockedMethod).toHaveBeenCalledTimes(1)
			})
		})
	})

	describe("GetLecturers", () => {
		const lecturers = [
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
		const mockedMethod = mockedDbClient.GetLecturersFromDb

		describe("Happy paths", () => {
			it("should get all Lecturers from database", async () => {
				// Arrange
				mockedMethod.mockResolvedValue(lecturers)

				// Act
				const result = await sut.GetLecturers()

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith()
				expect(mockedMethod).toHaveBeenCalledTimes(1)
				expect(result).toBe(lecturers)
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
				await expect(sut.GetLecturers()).rejects.toThrow(expectedError)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith()
				expect(mockedMethod).toHaveBeenCalledTimes(1)
			})
		})
	})
})
