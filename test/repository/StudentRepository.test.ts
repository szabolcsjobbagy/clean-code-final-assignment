import { mock, mockReset } from "jest-mock-extended"

import { StudentRepository } from "../../src/repository/StudentRepository"
import { NetworkError } from "../../src/errors/networkError"
import { IDbClient } from "../../src/abstraction/clients/IDbClient"

let sut: StudentRepository

const mockedDbClient = mock<IDbClient>()

beforeEach(() => {
	mockReset(mockedDbClient)

	sut = new StudentRepository(mockedDbClient)
})

describe("StudentRepository", () => {
	describe("AddStudent", () => {
		const studentId = 1
		const courseId = 1

		describe("Happy paths", () => {
			it("should add Student to database", async () => {
				// Arrange
				mockedDbClient.AddStudentToDb.mockResolvedValue(true)

				// Act
				const result = await sut.AddStudent(studentId, courseId)

				// Assert
				expect(mockedDbClient.AddStudentToDb).toHaveBeenCalledWith(studentId, courseId)

				expect(mockedDbClient.AddStudentToDb).toHaveBeenCalledTimes(1)
				expect(result).toBe(true)
			})

			it("should get FALSE if order is not paid", async () => {
				// Arrange
				mockedDbClient.AddStudentToDb.mockResolvedValue(false)

				// Act
				const result = await sut.AddStudent(studentId, courseId)

				// Assert
				expect(mockedDbClient.AddStudentToDb).toHaveBeenCalledWith(studentId, courseId)

				expect(mockedDbClient.AddStudentToDb).toHaveBeenCalledTimes(1)
				expect(result).toBe(false)
			})
		})

		describe("Error paths", () => {
			it("should throw an error if financial API client is not accessible", async () => {
				// Arrange
				const originalError = new Error(".....")
				mockedDbClient.AddStudentToDb.mockRejectedValue(originalError)
				const customErrorMessage = "Financial API client not accessible."
				const expectedError = new NetworkError(customErrorMessage)

				// Act & Assert
				await expect(sut.AddStudent(studentId, courseId)).rejects.toThrow(expectedError)

				// Assert
				expect(mockedDbClient.AddStudentToDb).toHaveBeenCalledWith(studentId, courseId)

				expect(mockedDbClient.AddStudentToDb).toHaveBeenCalledTimes(1)
			})
		})
	})

	describe("GetStudentById", () => {
		const studentId = 1
		const courseId = 1

		describe("Happy paths", () => {
			it("should add/update payment status of order to 'paid'", async () => {
				// Arrange
				const responseMessage = "Payment status changed to 'paid'."
				mockedDbClient.GetStudentByIdFromDb.mockResolvedValue(responseMessage)

				// Act
				const result = await sut.GetStudentById(studentId, courseId)

				// Assert
				expect(mockedDbClient.GetStudentByIdFromDb).toHaveBeenCalledWith(
					studentId,
					courseId,
					"paid"
				)

				expect(mockedDbClient.GetStudentByIdFromDb).toHaveBeenCalledTimes(1)
				expect(result).toBe(responseMessage)
			})
		})

		describe("Error paths", () => {
			it("should throw an error if financial API client is not accessible", async () => {
				// Arrange
				const originalError = new Error(".....")
				mockedDbClient.GetStudentByIdFromDb.mockRejectedValue(originalError)
				const customErrorMessage = "Financial API client not accessible."
				const expectedError = new NetworkError(customErrorMessage)

				// Act & Assert
				await expect(sut.GetStudentById(studentId, courseId)).rejects.toThrow(expectedError)

				// Assert
				expect(mockedDbClient.GetStudentByIdFromDb).toHaveBeenCalledWith(
					studentId,
					courseId,
					"paid"
				)

				expect(mockedDbClient.GetStudentByIdFromDb).toHaveBeenCalledTimes(1)
			})
		})
	})
})
