import { IMessageClient } from "../abstraction/clients/IMessageClient"
import { Person } from "../models/Person"

export class EmailClient implements IMessageClient {
	async SendNotification(message: string, recipient: Person): Promise<void> {
		console.log(
			`Email notification sent to ${recipient.GetEmailAddress()} with message: ${message}`
		)
	}
}
