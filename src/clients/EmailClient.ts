import { IMessageClient } from "../abstraction/clients/IMessageClient.js"
import { Person } from "../models/Person.js"
import { ValidationError } from "../errors/validationError.js"

export class EmailClient implements IMessageClient {
	async SendNotification(message: string, recipient: Person): Promise<void> {
		if (!this.isValidEmail(recipient.GetEmailAddress())) {
			throw new ValidationError("Invalid email address.")
		}

		console.log(
			`Email notification sent to ${recipient.GetEmailAddress()} with message: ${message}`
		)
	}

	private isValidEmail(emailAddress: string): boolean {
		const emailRegex = /\S+@\S+\.\S+/
		return emailRegex.test(emailAddress)
	}
}
