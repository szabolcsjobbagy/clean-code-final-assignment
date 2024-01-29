import { mock, mockReset } from "jest-mock-extended"

import { CourseStatisticsRepository } from "../../src/repository/CourseStatisticsRepository.js"
import { NetworkError } from "../../src/errors/networkError.js"
import { NotFoundError } from "../../src/errors/notFoundError.js"
import { IDbClient } from "../../src/abstraction/clients/IDbClient.js"
import { CourseStatistics } from "../../src/models/CourseStatistics.js"

let sut: CourseStatisticsRepository

const mockedDbClient = mock<IDbClient>()

beforeEach(() => {
	mockReset(mockedDbClient)

	sut = new CourseStatisticsRepository(mockedDbClient)
})

describe("CourseStatisticsRepository", () => {
	describe("AddCourseStatistics", () => {
		const courseStatistics = new CourseStatistics(1, 1, 1, 0, 0, new Date("2024-01-12"))
		const mockedMethod = mockedDbClient.AddCourseStatisticsToDb

		describe("Happy paths", () => {
			it("should add Course Statistics to database", async () => {
				// Arrange
				mockedMethod.mockResolvedValue()
				const consoleLogSpy = jest.spyOn(console, "log")
				const expectedLoggedMessage = `Course Statistics ${courseStatistics.GetId()} added to database.`

				// Act
				await sut.AddCourseStatistics(courseStatistics)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(courseStatistics)
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
				await expect(sut.AddCourseStatistics(courseStatistics)).rejects.toThrow(
					expectedError
				)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(courseStatistics)
				expect(mockedMethod).toHaveBeenCalledTimes(1)
			})
		})
	})

	describe("GetCourseStatisticsById", () => {
		const courseStatisticsId = 1
		const mockedMethod = mockedDbClient.GetCourseStatisticsByIdFromDb

		describe("Happy paths", () => {
			it("should get Course Statistics from database", async () => {
				// Arrange
				const courseStatistics = new CourseStatistics(1, 1, 1, 0, 0, new Date("2024-01-12"))

				mockedMethod.mockResolvedValue(courseStatistics)

				// Act
				const result = await sut.GetCourseStatisticsById(courseStatisticsId)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(courseStatisticsId)
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
				await expect(sut.GetCourseStatisticsById(courseStatisticsId)).rejects.toThrow(
					expectedError
				)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(courseStatisticsId)
				expect(mockedMethod).toHaveBeenCalledTimes(1)
			})

			it("should throw a Not Found error if Course Statistics is not found in database", async () => {
				// Arrange
				const originalError = new NotFoundError(".....")
				mockedDbClient.GetCourseStatisticsByIdFromDb.mockRejectedValue(originalError)
				const customErrorMessage = `Course Statistics ${courseStatisticsId} not found in database.`
				const expectedError = new NotFoundError(customErrorMessage)

				// Act & Assert
				await expect(sut.GetCourseStatisticsById(courseStatisticsId)).rejects.toThrow(
					expectedError
				)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith(courseStatisticsId)
				expect(mockedMethod).toHaveBeenCalledTimes(1)
			})
		})
	})

	describe("GetCourseStatistics", () => {
		const courseStatisticss = [
			new CourseStatistics(1, 1, 1, 0, 0, new Date("2024-01-12")),
			new CourseStatistics(2, 2, 2, 0, 0, new Date("2024-02-10")),
		]
		const mockedMethod = mockedDbClient.GetCourseStatisticsFromDb

		describe("Happy paths", () => {
			it("should get all Course Statistics from database", async () => {
				// Arrange
				mockedMethod.mockResolvedValue(courseStatisticss)

				// Act
				const result = await sut.GetCourseStatistics()

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith()
				expect(mockedMethod).toHaveBeenCalledTimes(1)
				expect(result).toBe(courseStatisticss)
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
				await expect(sut.GetCourseStatistics()).rejects.toThrow(expectedError)

				// Assert
				expect(mockedMethod).toHaveBeenCalledWith()
				expect(mockedMethod).toHaveBeenCalledTimes(1)
			})
		})
	})
})
