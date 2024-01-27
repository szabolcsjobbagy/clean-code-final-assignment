import { Student } from "../../models/Student"

export interface IStudentRepository {
	AddStudent(student: Student): Promise<void>
	GetStudentById(studentId: number): Promise<Student | undefined>
	GetStudents(): Promise<Student[]>
}
