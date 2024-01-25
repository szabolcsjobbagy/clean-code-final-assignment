import { Person } from "../models/Person"
import { IMessageClient } from "../abstraction/clients/IMessageClient"

export class PushNotificationClient implements IMessageClient {
	async SendNotification(message: string, recipient: Person): Promise<void> {
		console.log(`Push notification sent to ${recipient.GetName()} with message: ${message}`)
	}
}
