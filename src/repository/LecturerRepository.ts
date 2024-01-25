import { ILecturerRepository } from "../abstraction/repository/ILecturerRepository"
import { Lecturer } from "../models/Lecturer"
import { LecturerStatistic } from "../models/LecturerStatistic"

export class LecturerRepository implements ILecturerRepository {
	AddLecturer(lecturer: Lecturer): Promise<void> {
		throw new Error("Method not implemented.")
	}

	GetLecturerByName(lecturerName: string): Promise<Lecturer | undefined> {
		throw new Error("Method not implemented.")
	}

	GetLecturers(): Promise<Lecturer[]> {
		throw new Error("Method not implemented.")
	}

	GetLecturerStatistics(lecturerName: string): Promise<LecturerStatistic> {
		throw new Error("Method not implemented.")
	}
}
