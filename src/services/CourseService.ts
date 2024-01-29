import { Student } from "../models/Student"
import { ICourseRepository } from "../abstraction/repository/ICourseRepository"
import { IPaymentService } from "../abstraction/services/IPaymentService"
import { INotificationService } from "../abstraction/services/INotificationService"
import { ICourseService } from "../abstraction/services/ICourseService"

export class CourseService implements ICourseService {
	constructor(
		private courseRepository: ICourseRepository,
		private paymentService: IPaymentService,
		private notificationService: INotificationService
	) {}

	public async AddPaidStudentToCourse(student: Student, courseId: number) {
		const course = await this.courseRepository.GetCourseById(courseId)
		if (!course) {
			throw new Error(`Course ${courseId} not found.`)
		}

		const isCoursePaidByStudent = await this.paymentService.GetIsOrderPaid(
			student.GetId(),
			courseId
		)

		if (!isCoursePaidByStudent) {
			throw new Error(
				`Course ${course.GetId()} is not yet paid by student ${student.GetId()}.`
			)
		}

		await this.courseRepository.AddStudentToCourse(student, course.GetId())

		const message = `Student ${student.GetId()} added to course ${course.GetId()}.`
		await this.notificationService.SendNotifications(message, student)
	}
}
