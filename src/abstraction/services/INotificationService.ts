import { Person } from "../../models/Person.js"

export interface INotificationService {
	SendNotifications(message: string, recipient: Person): Promise<void>
}
