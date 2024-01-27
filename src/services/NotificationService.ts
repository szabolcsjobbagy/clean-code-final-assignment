import { IMessageClient } from "../abstraction/clients/IMessageClient"
import { INotificationService } from "../abstraction/services/INotificationService"
import { Person } from "../models/Person"

export class NotificationService implements INotificationService {
	constructor(private messageClients: IMessageClient[]) {}

	async SendNotifications(message: string, recipient: Person): Promise<void> {
		for (const messageClient of this.messageClients) {
			await messageClient.SendNotification(message, recipient)
		}
	}
}
