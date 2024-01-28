var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DbClient } from "./clients/DbClient.js";
import { EmailClient } from "./clients/EmailClient.js";
import { FinancialApiClient } from "./clients/FinancialApiClient.js";
import { PushNotificationClient } from "./clients/PushNotificationClient.js";
import { Course } from "./models/Course.js";
import { CourseStatistics } from "./models/CourseStatistics.js";
import { Lecturer } from "./models/Lecturer.js";
import { Student } from "./models/Student.js";
import { CourseRepository } from "./repository/CourseRepository.js";
import { CourseStatisticsRepository } from "./repository/CourseStatisticsRepository.js";
import { LecturerRepository } from "./repository/LecturerRepository.js";
import { StudentRepository } from "./repository/StudentRepository.js";
import { CourseService } from "./services/CourseService.js";
import { NotificationService } from "./services/NotificationService.js";
import { PaymentService } from "./services/PaymentService.js";
main();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const { student1, student2, lecturer1, lecturer2, course1, course2, courseStatistics1, courseStatistics2, } = createModelInstances();
        const { dbClient, financialApiClient, emailClient, pushNotificationClient, messageClients } = createClientInstances();
        const { courseRepository, studentRepository, lecturerRepository, courseStatisticsRepository } = createRepositoryInstances(dbClient);
        const { notificationService, paymentService, courseService } = createServiceInstances(messageClients, financialApiClient, courseRepository);
        student1.SetRegistrationDate(new Date("2024-01-02"));
        student2.SetRegistrationDate(new Date("2024-01-04"));
        studentRepository.AddStudent(student1);
        studentRepository.AddStudent(student2);
        lecturer1.SetStartDate(new Date("2023-06-08"));
        lecturer2.SetStartDate(new Date("2023-07-03"));
        lecturerRepository.AddLecturer(lecturer1);
        lecturerRepository.AddLecturer(lecturer2);
        yield courseRepository.AddLecturerToCourse(lecturer1, 1);
        yield courseRepository.AddLecturerToCourse(lecturer2, 2);
        yield courseRepository.AddCourse(course1);
        yield courseRepository.AddCourse(course2);
        console.log(yield paymentService.PayForCourse(student1.GetId(), course1.GetId()));
        console.log(yield paymentService.PayForCourse(student2.GetId(), course2.GetId()));
        console.log("Payment items:\n");
        console.log(yield financialApiClient.GetPaymentItems());
        yield courseService.AddPaidStudentToCourse(student1, course1.GetId());
        yield courseService.AddPaidStudentToCourse(student2, course2.GetId());
        yield courseStatisticsRepository.AddCourseStatistics(courseStatistics1);
        yield courseStatisticsRepository.AddCourseStatistics(courseStatistics2);
        console.log(yield courseRepository.GetCourseStatisticsById(course1.GetId()));
        console.log(yield courseRepository.GetCourseStatisticsById(course2.GetId()));
    });
}
function createModelInstances() {
    const student1 = new Student(1, "Trainee Smith", new Date("1999-05-04"), "male", "trainee.smith@gmail.com", "+36301234567");
    const student2 = new Student(2, "Trainee Newton", new Date("2001-08-09"), "female", "trainee.newton@gmail.com", "+36709373495");
    const lecturer1 = new Lecturer(1, "Trainer Taylor", new Date("1986-01-01"), "female", "trainer.taylor@gmail.com", "+36203539854");
    const lecturer2 = new Lecturer(2, "Trainer Brown", new Date("1986-01-01"), "male", "trainer.brown@gmail.com", "+36208265385");
    const course1 = new Course(1, "TypeScript BASICS", 45000, 4, new Date("2024-01-12"));
    const course2 = new Course(2, "TypeScript ADVANCED", 65000, 4, new Date("2024-02-10"));
    const courseStatistics1 = new CourseStatistics(1, 1, 1, 0, 0, new Date("2024-01-12"));
    const courseStatistics2 = new CourseStatistics(2, 2, 2, 0, 0, new Date("2024-02-10"));
    return {
        student1,
        student2,
        lecturer1,
        lecturer2,
        course1,
        course2,
        courseStatistics1,
        courseStatistics2,
    };
}
function createClientInstances() {
    const dbClient = new DbClient();
    const financialApiClient = new FinancialApiClient();
    const emailClient = new EmailClient();
    const pushNotificationClient = new PushNotificationClient();
    const messageClients = [emailClient, pushNotificationClient];
    return {
        dbClient,
        financialApiClient,
        emailClient,
        pushNotificationClient,
        messageClients,
    };
}
function createRepositoryInstances(dbClient) {
    const courseRepository = new CourseRepository(dbClient);
    const studentRepository = new StudentRepository(dbClient);
    const lecturerRepository = new LecturerRepository(dbClient);
    const courseStatisticsRepository = new CourseStatisticsRepository(dbClient);
    return {
        courseRepository,
        studentRepository,
        lecturerRepository,
        courseStatisticsRepository,
    };
}
function createServiceInstances(messageClients, financialApiClient, courseRepository) {
    const notificationService = new NotificationService(messageClients);
    const paymentService = new PaymentService(financialApiClient);
    const courseService = new CourseService(courseRepository, paymentService, notificationService);
    return {
        notificationService,
        paymentService,
        courseService,
    };
}
