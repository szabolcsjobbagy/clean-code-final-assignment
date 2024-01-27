import { Course } from "../../models/Course"
import { Student } from "../../models/Student"

export interface ICourseService {
	AddPaidStudentToCourse(student: Student, courseId: number): Promise<void>
}
