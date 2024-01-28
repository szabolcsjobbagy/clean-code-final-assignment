import { IDbClient } from "./abstraction/clients/IDbClient.js"
import { IFinancialApiClient } from "./abstraction/clients/IFinancialApiClient.js"
import { IMessageClient } from "./abstraction/clients/IMessageClient.js"
import { ICourseRepository } from "./abstraction/repository/ICourseRepository.js"
import { DbClient } from "./clients/DbClient.js"
import { EmailClient } from "./clients/EmailClient.js"
import { FinancialApiClient } from "./clients/FinancialApiClient.js"
import { PushNotificationClient } from "./clients/PushNotificationClient.js"
import { Course } from "./models/Course.js"
import { CourseStatistics } from "./models/CourseStatistics.js"
import { Lecturer } from "./models/Lecturer.js"
import { Student } from "./models/Student.js"
import { CourseRepository } from "./repository/CourseRepository.js"
import { CourseStatisticsRepository } from "./repository/CourseStatisticsRepository.js"
import { LecturerRepository } from "./repository/LecturerRepository.js"
import { StudentRepository } from "./repository/StudentRepository.js"
import { CourseService } from "./services/CourseService.js"
import { NotificationService } from "./services/NotificationService.js"
import { PaymentService } from "./services/PaymentService.js"

main()

async function main() {
	const {
		student1,
		student2,
		lecturer1,
		lecturer2,
		course1,
		course2,
		courseStatistics1,
		courseStatistics2,
	} = createModelInstances()

	const { dbClient, financialApiClient, emailClient, pushNotificationClient, messageClients } =
		createClientInstances()

	const { courseRepository, studentRepository, lecturerRepository, courseStatisticsRepository } =
		createRepositoryInstances(dbClient)

	const { notificationService, paymentService, courseService } = createServiceInstances(
		messageClients,
		financialApiClient,
		courseRepository
	)

	student1.SetRegistrationDate(new Date("2024-01-02"))
	student2.SetRegistrationDate(new Date("2024-01-04"))

	studentRepository.AddStudent(student1)
	studentRepository.AddStudent(student2)

	lecturer1.SetStartDate(new Date("2023-06-08"))
	lecturer2.SetStartDate(new Date("2023-07-03"))

	lecturerRepository.AddLecturer(lecturer1)
	lecturerRepository.AddLecturer(lecturer2)

	await courseRepository.AddLecturerToCourse(lecturer1, 1)
	await courseRepository.AddLecturerToCourse(lecturer2, 2)

	await courseRepository.AddCourse(course1)
	await courseRepository.AddCourse(course2)

	console.log(await paymentService.PayForCourse(student1.GetId(), course1.GetId()))
	console.log(await paymentService.PayForCourse(student2.GetId(), course2.GetId()))

	console.log("Payment items:\n")
	console.log(await financialApiClient.GetPaymentItems())

	await courseService.AddPaidStudentToCourse(student1, course1.GetId())
	await courseService.AddPaidStudentToCourse(student2, course2.GetId())

	await courseStatisticsRepository.AddCourseStatistics(courseStatistics1)
	await courseStatisticsRepository.AddCourseStatistics(courseStatistics2)

	console.log(await courseRepository.GetCourseStatisticsById(course1.GetId()))
	console.log(await courseRepository.GetCourseStatisticsById(course2.GetId()))
}

function createModelInstances() {
	const student1 = new Student(
		1,
		"Trainee Smith",
		new Date("1999-05-04"),
		"male",
		"trainee.smith@gmail.com",
		"+36301234567"
	)

	const student2 = new Student(
		2,
		"Trainee Newton",
		new Date("2001-08-09"),
		"female",
		"trainee.newton@gmail.com",
		"+36709373495"
	)

	const lecturer1 = new Lecturer(
		1,
		"Trainer Taylor",
		new Date("1986-01-01"),
		"female",
		"trainer.taylor@gmail.com",
		"+36203539854"
	)

	const lecturer2 = new Lecturer(
		2,
		"Trainer Brown",
		new Date("1986-01-01"),
		"male",
		"trainer.brown@gmail.com",
		"+36208265385"
	)

	const course1 = new Course(1, "TypeScript BASICS", 45000, 4, new Date("2024-01-12"))
	const course2 = new Course(2, "TypeScript ADVANCED", 65000, 4, new Date("2024-02-10"))

	const courseStatistics1 = new CourseStatistics(1, 1, 1, 0, 0, new Date("2024-01-12"))
	const courseStatistics2 = new CourseStatistics(2, 2, 2, 0, 0, new Date("2024-02-10"))
	return {
		student1,
		student2,
		lecturer1,
		lecturer2,
		course1,
		course2,
		courseStatistics1,
		courseStatistics2,
	}
}

function createClientInstances() {
	const dbClient = new DbClient()
	const financialApiClient = new FinancialApiClient()
	const emailClient = new EmailClient()
	const pushNotificationClient = new PushNotificationClient()
	const messageClients = [emailClient, pushNotificationClient]

	return {
		dbClient,
		financialApiClient,
		emailClient,
		pushNotificationClient,
		messageClients,
	}
}

function createRepositoryInstances(dbClient: IDbClient) {
	const courseRepository = new CourseRepository(dbClient)
	const studentRepository = new StudentRepository(dbClient)
	const lecturerRepository = new LecturerRepository(dbClient)
	const courseStatisticsRepository = new CourseStatisticsRepository(dbClient)

	return {
		courseRepository,
		studentRepository,
		lecturerRepository,
		courseStatisticsRepository,
	}
}

function createServiceInstances(
	messageClients: IMessageClient[],
	financialApiClient: IFinancialApiClient,
	courseRepository: ICourseRepository
) {
	const notificationService = new NotificationService(messageClients)
	const paymentService = new PaymentService(financialApiClient)
	const courseService = new CourseService(courseRepository, paymentService, notificationService)

	return {
		notificationService,
		paymentService,
		courseService,
	}
}
