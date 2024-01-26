import { DbClient } from "./clients/DbClient.js"
import { EmailClient } from "./clients/EmailClient.js"
import { FinancialApiClient } from "./clients/FinancialApiClient.js"
import { PushNotificationClient } from "./clients/PushNotificationClient.js"
import { Course } from "./models/Course.js"
import { CourseStatistics } from "./models/CourseStatistics.js"
import { Lecturer } from "./models/Lecturer.js"
import { Student } from "./models/Student.js"
import { CourseRepository } from "./repository/CourseRepository.js"
import { CourseService } from "./services/CourseService.js"
import { NotificationService } from "./services/NotificationService.js"
import { PaymentService } from "./services/PaymentService.js"

const dbClient = new DbClient()
const courseRepository = new CourseRepository(dbClient)

const financialApiClient = new FinancialApiClient()
const paymentService = new PaymentService(financialApiClient)

const emailClient = new EmailClient()
const pushNotificationClient = new PushNotificationClient()
const messageClients = [emailClient, pushNotificationClient]

const notificationService = new NotificationService(messageClients)
const courseService = new CourseService(courseRepository, paymentService, notificationService)

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

student1.setRegistrationDate(new Date("2024-01-02"))
student2.setRegistrationDate(new Date("2024-01-04"))

lecturer1.SetStartDate(new Date("2023-06-08"))
lecturer2.SetStartDate(new Date("2023-07-03"))

const course1 = new Course(1, "TypeScript Basics", 45000, 4, new Date("2024-01-12"))
const course2 = new Course(2, "TypeScript Advanced", 65000, 4, new Date("2024-02-10"))

course1.AddLecturer(lecturer1)
course1.AddLecturer(lecturer2)

courseRepository.AddCourse(course1)
courseRepository.AddCourse(course2)

const courseStatistics1 = new CourseStatistics(1, 10, 5, 50, new Date("2024-01-12"))

courseService.AddStudentToCourse(student1, 1)
courseService.AddStudentToCourse(student2, 1)

console.log(courseService.GetCourseStatistics(1))
