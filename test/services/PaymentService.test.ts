import { mock, mockReset } from "jest-mock-extended"

import { PaymentService } from "../../src/services/PaymentService"
import { NetworkError } from "../../src/errors/networkError"
import { IFinancialApiClient } from "../../src/abstraction/clients/IFinancialApiClient"

let sut: PaymentService

const mockedFinancialApiClient = mock<IFinancialApiClient>()

beforeEach(() => {
	mockReset(mockedFinancialApiClient)

	sut = new PaymentService(mockedFinancialApiClient)
})

describe("PaymentService", () => {
	describe("GetIsOrderPaid", () => {
		const studentId = 1
		const courseId = 1

		describe("Happy paths", () => {
			it("should get TRUE if order is paid", async () => {
				// Arrange
				mockedFinancialApiClient.GetIsOrderPaid.mockResolvedValue(true)

				// Act
				const result = await sut.GetIsOrderPaid(studentId, courseId)

				// Assert
				expect(mockedFinancialApiClient.GetIsOrderPaid).toHaveBeenCalledWith(
					studentId,
					courseId
				)

				expect(mockedFinancialApiClient.GetIsOrderPaid).toHaveBeenCalledTimes(1)
				expect(result).toBe(true)
			})

			it("should get FALSE if order is not paid", async () => {
				// Arrange
				mockedFinancialApiClient.GetIsOrderPaid.mockResolvedValue(false)

				// Act
				const result = await sut.GetIsOrderPaid(studentId, courseId)

				// Assert
				expect(mockedFinancialApiClient.GetIsOrderPaid).toHaveBeenCalledWith(
					studentId,
					courseId
				)

				expect(mockedFinancialApiClient.GetIsOrderPaid).toHaveBeenCalledTimes(1)
				expect(result).toBe(false)
			})
		})

		describe("Error paths", () => {
			it("should throw an error if financial API client is not accessible", async () => {
				// Arrange
				const originalError = new Error(".....")
				mockedFinancialApiClient.GetIsOrderPaid.mockRejectedValue(originalError)
				const customErrorMessage = "Financial API client not accessible."
				const expectedError = new NetworkError(customErrorMessage)

				// Act & Assert
				await expect(sut.GetIsOrderPaid(studentId, courseId)).rejects.toThrow(expectedError)

				// Assert
				expect(mockedFinancialApiClient.GetIsOrderPaid).toHaveBeenCalledWith(
					studentId,
					courseId
				)

				expect(mockedFinancialApiClient.GetIsOrderPaid).toHaveBeenCalledTimes(1)
			})
		})
	})

	describe("PayForCourse", () => {
		const studentId = 1
		const courseId = 1

		describe("Happy paths", () => {
			it("should add/update payment status of order to 'paid'", async () => {
				// Arrange
				mockedFinancialApiClient.ChangePaymentStatus.mockResolvedValue()
				const consoleLogSpy = jest.spyOn(console, "log")
				const expectedLoggedMessage = `Payment status of student ${studentId} for course ${courseId} changed to 'paid'.`

				// Act
				await sut.PayForCourse(studentId, courseId)

				// Assert
				expect(mockedFinancialApiClient.ChangePaymentStatus).toHaveBeenCalledWith(
					studentId,
					courseId,
					"paid"
				)

				expect(mockedFinancialApiClient.ChangePaymentStatus).toHaveBeenCalledTimes(1)
				expect(consoleLogSpy).toHaveBeenCalledWith(expectedLoggedMessage)
			})
		})

		describe("Error paths", () => {
			it("should throw an error if financial API client is not accessible", async () => {
				// Arrange
				const originalError = new Error(".....")
				mockedFinancialApiClient.ChangePaymentStatus.mockRejectedValue(originalError)
				const customErrorMessage = "Financial API client not accessible."
				const expectedError = new NetworkError(customErrorMessage)

				// Act & Assert
				await expect(sut.PayForCourse(studentId, courseId)).rejects.toThrow(expectedError)

				// Assert
				expect(mockedFinancialApiClient.ChangePaymentStatus).toHaveBeenCalledWith(
					studentId,
					courseId,
					"paid"
				)

				expect(mockedFinancialApiClient.ChangePaymentStatus).toHaveBeenCalledTimes(1)
			})
		})
	})
})
