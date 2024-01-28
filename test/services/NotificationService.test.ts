import { mock, mockReset } from "jest-mock-extended"

import { NotificationService } from "../../src/services/NotificationService"
import { EmailClient } from "../../src/clients/EmailClient"
import { PushNotificationClient } from "../../src/clients/PushNotificationClient"
import { Person } from "../../src/models/Person"
import { Course } from "../../src/models/Course"
import { IMessageClient } from "../../src/abstraction/clients/IMessageClient"
import { NetworkError } from "../../src/errors/networkError"
import { ValidationError } from "../../src/errors/validationError"

let sut: NotificationService

const mockedEmailClient = mock<EmailClient>()
const mockedPushNotificationClient = mock<PushNotificationClient>()

beforeEach(() => {
	mockReset(mockedEmailClient)
	mockReset(mockedPushNotificationClient)

	const mockedMessageClients: IMessageClient[] = [mockedEmailClient, mockedPushNotificationClient]
	sut = new NotificationService(mockedMessageClients)
})

describe("NotificationService", () => {
	describe("SendNotifications", () => {
		const recipient = new Person(
			1,
			"Trainee Smith",
			new Date("1999-05-04"),
			"male",
			"trainee.smith@gmail.com",
			"+36301234567"
		)
		const course = new Course(1, "TypeScript BASICS", 45000, 4, new Date("2024-01-12"))
		const message = `${recipient.GetId()} - ${recipient.GetName()} student was added to course: ${course.GetId()} - ${course.GetName()}.`

		describe("Happy paths", () => {
			it("should send notifications to recipient", async () => {
				// Arrange

				// Act
				await sut.SendNotifications(message, recipient)

				// Assert
				expect(mockedEmailClient.SendNotification).toHaveBeenCalledWith(message, recipient)
				expect(mockedPushNotificationClient.SendNotification).toHaveBeenCalledWith(
					message,
					recipient
				)

				expect(mockedEmailClient.SendNotification).toHaveBeenCalledTimes(1)
				expect(mockedPushNotificationClient.SendNotification).toHaveBeenCalledTimes(1)
			})
		})

		describe("Error paths", () => {
			it("should throw a Network error if the message client is not accessible", async () => {
				// Arrange
				const originalError = new Error(".....")
				mockedEmailClient.SendNotification.mockRejectedValue(originalError)
				const customErrorMessage = "Message client not accessible."
				const expectedError = new NetworkError(customErrorMessage)

				// Act & Assert
				await expect(sut.SendNotifications(message, recipient)).rejects.toThrow(
					expectedError
				)

				expect(mockedEmailClient.SendNotification).toHaveBeenCalledWith(message, recipient)

				expect(mockedEmailClient.SendNotification).toHaveBeenCalledTimes(1)
				expect(mockedPushNotificationClient.SendNotification).toHaveBeenCalledTimes(0)
			})

			it("should throw a Validation error if the email address in not valid", async () => {
				// Arrange
				const originalError = new ValidationError("Invalid email address.")
				mockedEmailClient.SendNotification.mockRejectedValue(originalError)
				const customErrorMessage = originalError.message
				const expectedError = new NetworkError(customErrorMessage)

				// Act & Assert
				await expect(sut.SendNotifications(message, recipient)).rejects.toThrow(
					expectedError
				)

				expect(mockedEmailClient.SendNotification).toHaveBeenCalledWith(message, recipient)

				expect(mockedEmailClient.SendNotification).toHaveBeenCalledTimes(1)
				expect(mockedPushNotificationClient.SendNotification).toHaveBeenCalledTimes(0)
			})

			it("should throw a Validation error if the phone number in not valid", async () => {
				// Arrange
				const originalError = new ValidationError("Invalid phone number.")
				mockedPushNotificationClient.SendNotification.mockRejectedValue(originalError)
				const customErrorMessage = originalError.message
				const expectedError = new NetworkError(customErrorMessage)

				// Act & Assert
				await expect(sut.SendNotifications(message, recipient)).rejects.toThrow(
					expectedError
				)

				expect(mockedEmailClient.SendNotification).toHaveBeenCalledWith(message, recipient)
				expect(mockedPushNotificationClient.SendNotification).toHaveBeenCalledWith(
					message,
					recipient
				)

				expect(mockedEmailClient.SendNotification).toHaveBeenCalledTimes(1)
				expect(mockedPushNotificationClient.SendNotification).toHaveBeenCalledTimes(1)
			})
		})
	})
})
