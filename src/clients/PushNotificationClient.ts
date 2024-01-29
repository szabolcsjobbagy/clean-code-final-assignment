import { IMessageClient } from "../abstraction/clients/IMessageClient.js"
import { Person } from "../models/Person.js"
import { ValidationError } from "../errors/validationError.js"

export class PushNotificationClient implements IMessageClient {
	async SendNotification(message: string, recipient: Person): Promise<void> {
		if (!this.isValidPhoneNumber(recipient.GetPhoneNumber())) {
			throw new ValidationError("Invalid phone number.")
		}

		// Send push notification
		console.log(
			`Push notification sent to ${recipient.GetPhoneNumber()} with message: ${message}`
		)
	}

	private isValidPhoneNumber(phoneNumber: string): boolean {
		const phoneRegex = /^(\+36|06)(20|30|31|70|90)(\d{7})$/
		return phoneRegex.test(phoneNumber)
	}
}
