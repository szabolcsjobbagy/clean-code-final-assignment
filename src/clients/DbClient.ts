import { Course } from "../models/Course"
import { ChangedData, IDbClient } from "../abstraction/clients/IDbClient"
import { Student } from "../models/Student"
import { Lecturer } from "../models/Lecturer"

export class DbClient implements IDbClient {
	async AddItem(item: Course | Student | Lecturer): Promise<void> {
		console.log(`Item ${item} added to database.`)
	}

	async GetItem(itemId: number): Promise<void> {
		console.log(`Item ${itemId} received from database.`)
	}

	async UpdateItem(itemId: number, changedData: ChangedData): Promise<void> {
		console.log(`Item ${itemId} updated in database with changed data: ${changedData}.`)
	}

	async DeleteItem(itemId: number): Promise<void> {
		console.log(`Item ${itemId} deleted from database.`)
	}
}
