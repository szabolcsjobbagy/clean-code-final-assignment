import { INotificationService } from "../abstraction/services/INotificationService"

export class NotificationService implements INotificationService {
	SendNotifications(message: string): Promise<void> {
		throw new Error("Method not implemented.")
	}
}
