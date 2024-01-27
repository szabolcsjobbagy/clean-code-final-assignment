import { IMessageClient } from "../abstraction/clients/IMessageClient"
import { Person } from "../models/Person"

export class PushNotificationClient implements IMessageClient {
	async SendNotification(message: string, recipient: Person): Promise<void> {
		console.log(
			`Push notification sent to ${recipient.GetPhoneNumber()} with message: ${message}`
		)
	}
}
