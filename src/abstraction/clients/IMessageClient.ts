import { Person } from "../../models/Person"

export interface IMessageClient {
	SendNotification(message: string, recipient: Person): Promise<void>
}
