import { IMessageClient } from "../abstraction/clients/IMessageClient"

export class EmailClient implements IMessageClient {
	async SendNotification(message: string, recipient: string): Promise<void> {
		console.log(`Email notification sent to ${recipient} with message: ${message}`)
	}
}
