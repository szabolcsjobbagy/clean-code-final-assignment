import { IMessageClient } from "../abstraction/clients/IMessageClient"
import { INotificationService } from "../abstraction/services/INotificationService"

export class NotificationService implements INotificationService {
	constructor(private messageClients: IMessageClient[]) {}

	async SendNotifications(message: string, recipients: string[]): Promise<void> {
		for (const recipient of recipients) {
			for (const messageClient of this.messageClients) {
				await messageClient.SendNotification(message, recipient)
			}
		}
	}
}
