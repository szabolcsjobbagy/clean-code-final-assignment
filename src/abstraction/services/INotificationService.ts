export interface INotificationService {
	SendNotifications(message: string, recipients: string[]): Promise<void>
}
