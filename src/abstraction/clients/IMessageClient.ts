export interface IMessageClient {
	SendNotification(message: string, recipient: string): Promise<void>
}
