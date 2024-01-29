import { PushNotificationClient } from "../../src/clients/PushNotificationClient.js"
import { ValidationError } from "../../src/errors/validationError.js"
import { Person } from "../../src/models/Person.js"

let sut: PushNotificationClient

beforeEach(() => {
	sut = new PushNotificationClient()
})

describe("PushNotificationClient", () => {
	describe("SendNotification", () => {
		describe("Happy paths", () => {
			const recipient = new Person(
				1,
				"Trainee Smith",
				new Date("1999-05-04"),
				"male",
				"trainee.smith@gmail.com",
				"+36301234567"
			)
			const message = `Student ${recipient.GetId()} was added to course 1.`

			it("should send message as Push Notification to recipient's phone number", async () => {
				// Arrange
				const consoleLogSpy = jest.spyOn(console, "log")
				const expectedLoggedMessage = `Push notification sent to ${recipient.GetPhoneNumber()} with message: ${message}`

				// Act
				await sut.SendNotification(message, recipient)

				// Assert
				expect(consoleLogSpy).toHaveBeenCalledWith(expectedLoggedMessage)
			})
		})

		describe("Error paths", () => {
			const recipient = new Person(
				1,
				"Trainee Smith",
				new Date("1999-05-04"),
				"male",
				"trainee.smith@gmail.com",
				"e4j8dfgh67"
			)
			const message = `Student ${recipient.GetId()} was added to course 1.`

			it("should throw an error if phone number is invalid", async () => {
				// Arrange
				const expectedError = new ValidationError("Invalid phone number.")

				// Act & Assert
				await expect(sut.SendNotification(message, recipient)).rejects.toThrow(
					expectedError
				)
			})
		})
	})
})
