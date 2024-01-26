import { Course } from "../models/Course"
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

	public async AddCourse(course: Course) {
		await this.courseRepository.AddCourse(course)
	}

	public async AddStudentToCourse(student: Student, courseId: number) {
		const course = await this.courseRepository.GetCourseById(courseId)
		if (!course) {
			throw new Error("Course not found")
		}
		const isCoursePaidByStudent = await this.paymentService.GetIsOrderPaid(
			student.GetId(),
			courseId
		)
		if (!isCoursePaidByStudent) {
			throw new Error("Course is not yet paid by Student.")
		}
		course.AddStudent(student)
		const lecturersOfCourse = course.GetLecturers()

		const lecturerEmailAddresses: string[] = lecturersOfCourse.map((lecturer) =>
			lecturer.GetEmailAddress()
		)

		const recipientEmailAddresses: string[] = lecturerEmailAddresses.concat(
			student.GetEmailAddress()
		)

		const message = `${student.GetName()} student was added to course ${course.GetName()}.`
		await this.notificationService.SendNotifications(message, recipientEmailAddresses)
	}

	public async GetCourseById(courseId: number): Promise<Course | undefined> {
		return await this.courseRepository.GetCourseById(courseId)
	}

	public async GetCourses() {
		return await this.courseRepository.GetCourses()
	}

	public async GetCourseStatistics(courseId: number) {
		return await this.courseRepository.GetCourseStatistics(courseId)
	}
}
