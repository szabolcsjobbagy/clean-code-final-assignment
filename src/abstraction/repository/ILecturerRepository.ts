import { Lecturer } from "../../models/Lecturer"
import { LecturerStatistic } from "../../models/LecturerStatistic"

export interface ILecturerRepository {
	AddLecturer(lecturer: Lecturer): Promise<void>
	GetLecturerByName(lecturerName: string): Promise<Lecturer | undefined>
	GetLecturers(): Promise<Lecturer[]>
	GetLecturerStatistics(lecturerName: string): Promise<LecturerStatistic>
}
