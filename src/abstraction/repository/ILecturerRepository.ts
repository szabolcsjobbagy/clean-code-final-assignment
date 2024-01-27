import { Lecturer } from "../../models/Lecturer"

export interface ILecturerRepository {
	AddLecturer(lecturer: Lecturer): Promise<void>
	GetLecturerById(lecturerId: number): Promise<Lecturer | undefined>
	GetLecturers(): Promise<Lecturer[]>
}
