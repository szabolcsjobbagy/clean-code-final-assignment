import { IMessageClient } from "../abstraction/clients/IMessageClient"

export class PushNotificationClient implements IMessageClient {
	async SendNotification(message: string, recipient: string): Promise<void> {
		console.log(`Push notification sent to ${recipient} with message: ${message}`)
	}
}
