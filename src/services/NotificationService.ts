import { IMessageClient } from "../abstraction/clients/IMessageClient.js"
import { INotificationService } from "../abstraction/services/INotificationService.js"
import { NetworkError } from "../errors/networkError.js"
import { ValidationError } from "../errors/validationError.js"
import { Person } from "../models/Person.js"

export class NotificationService implements INotificationService {
	constructor(private messageClients: IMessageClient[]) {}

	async SendNotifications(message: string, recipient: Person): Promise<void> {
		for (const messageClient of this.messageClients) {
			try {
				await messageClient.SendNotification(message, recipient)
			} catch (error) {
				if (error instanceof ValidationError) {
					throw error
				}

				throw new NetworkError("Message client not accessible.", error as Error)
			}
		}
	}
}
