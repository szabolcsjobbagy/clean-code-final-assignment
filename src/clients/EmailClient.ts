import { Person } from "../models/Person"
import { IMessageClient } from "../abstraction/clients/IMessageClient"

export class EmailClient implements IMessageClient {
	async SendNotification(message: string, recipient: Person): Promise<void> {
		console.log(`Email notification sent to ${recipient.GetName()} with message: ${message}`)
	}
}
