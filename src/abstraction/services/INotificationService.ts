import { Person } from "../../models/Person"

export interface INotificationService {
	SendNotifications(message: string, recipient: Person): Promise<void>
}
