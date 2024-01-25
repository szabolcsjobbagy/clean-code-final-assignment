import { Course } from "../../models/Course"
import { Lecturer } from "../../models/Lecturer"
import { Student } from "../../models/Student"

export type ChangedData = Record<string, string | number | Date | boolean>

export interface IDbClient {
	AddItem(item: Course | Student | Lecturer): Promise<void>
	GetItem(itemId: number): Promise<void>
	UpdateItem(itemId: number, changedData: ChangedData): Promise<void>
	DeleteItem(itemId: number): Promise<void>
}
