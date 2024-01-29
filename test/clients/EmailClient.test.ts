import { EmailClient } from "../../src/clients/EmailClient.js"
import { ValidationError } from "../../src/errors/validationError.js"
import { Person } from "../../src/models/Person.js"

let sut: EmailClient

beforeEach(() => {
	sut = new EmailClient()
})

describe("EmailClient", () => {
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

			it("should send message as Email Notification to recipient's email address", async () => {
				// Arrange
				const consoleLogSpy = jest.spyOn(console, "log")
				const expectedLoggedMessage = `Email notification sent to ${recipient.GetEmailAddress()} with message: ${message}`

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
				"trainee.smith.gmail.com",
				"+36301234567"
			)
			const message = `Student ${recipient.GetId()} was added to course 1.`

			it("should throw an error if email address is invalid", async () => {
				// Arrange
				const expectedError = new ValidationError("Invalid email address.")

				// Act & Assert
				await expect(sut.SendNotification(message, recipient)).rejects.toThrow(
					expectedError
				)
			})
		})
	})
})
