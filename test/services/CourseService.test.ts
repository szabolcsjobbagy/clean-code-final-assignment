import { mock, mockReset } from "jest-mock-extended"

import { CourseService } from "../../src/services/CourseService.js"
import { ICourseRepository } from "../../src/abstraction/repository/ICourseRepository.js"
import { IPaymentService } from "../../src/abstraction/services/IPaymentService.js"
import { INotificationService } from "../../src/abstraction/services/INotificationService.js"
import { Student } from "../../src/models/Student.js"
import { Course } from "../../src/models/Course.js"

let sut: CourseService

const mockedCourseRepository = mock<ICourseRepository>()
const mockedPaymentService = mock<IPaymentService>()
const mockedNotificationService = mock<INotificationService>()

beforeEach(() => {
	mockReset(mockedCourseRepository)
	mockReset(mockedPaymentService)
	mockReset(mockedNotificationService)
	sut = new CourseService(mockedCourseRepository, mockedPaymentService, mockedNotificationService)
})

describe("CourseService", () => {
	describe("AddPaidStudentToCourse", () => {
		describe("Happy paths", () => {
			it("should add a paid student to a course", async () => {
				// Arrange
				const student = new Student(
					1,
					"Trainee Smith",
					new Date("1999-05-04"),
					"male",
					"trainee.smith@gmail.com",
					"+36301234567"
				)
				const courseId = 1
				const course = new Course(1, "TypeScript BASICS", 45000, 4, new Date("2024-01-12"))
				const message = `Student ${student.GetId()} added to course ${courseId}.`

				mockedCourseRepository.GetCourseById.mockResolvedValue(course)
				mockedPaymentService.GetIsOrderPaid.mockResolvedValue(true)
				mockedCourseRepository.AddStudentToCourse.mockResolvedValue()
				mockedNotificationService.SendNotifications.mockResolvedValue()

				// Act
				await sut.AddPaidStudentToCourse(student, courseId)

				// Assert
				expect(mockedCourseRepository.GetCourseById).toHaveBeenCalledWith(courseId)
				expect(mockedPaymentService.GetIsOrderPaid).toHaveBeenCalledWith(
					student.GetId(),
					courseId
				)
				expect(mockedCourseRepository.AddStudentToCourse).toHaveBeenCalledWith(
					student,
					courseId
				)
				expect(mockedNotificationService.SendNotifications).toHaveBeenCalledWith(
					message,
					student
				)

				expect(mockedCourseRepository.GetCourseById).toHaveBeenCalledTimes(1)
				expect(mockedPaymentService.GetIsOrderPaid).toHaveBeenCalledTimes(1)
				expect(mockedCourseRepository.AddStudentToCourse).toHaveBeenCalledTimes(1)
				expect(mockedNotificationService.SendNotifications).toHaveBeenCalledTimes(1)
			})
		})

		describe("Error paths", () => {
			it("should throw an error if the course is not found", async () => {
				const student = new Student(
					1,
					"Trainee Smith",
					new Date("1999-05-04"),
					"male",
					"trainee.smith@gmail.com",
					"+36301234567"
				)
				const courseId = 3
				const expectedErrorMessage = `Course ${courseId} not found.`

				// Arrange
				mockedCourseRepository.GetCourseById.mockResolvedValue(undefined)
				mockedPaymentService.GetIsOrderPaid.mockResolvedValue(true)
				mockedCourseRepository.AddStudentToCourse.mockResolvedValue()
				mockedNotificationService.SendNotifications.mockResolvedValue()

				// Act & Assert
				await expect(sut.AddPaidStudentToCourse(student, courseId)).rejects.toThrow(
					expectedErrorMessage
				)

				expect(mockedCourseRepository.GetCourseById).toHaveBeenCalledTimes(1)
				expect(mockedPaymentService.GetIsOrderPaid).toHaveBeenCalledTimes(0)
				expect(mockedCourseRepository.AddStudentToCourse).toHaveBeenCalledTimes(0)
				expect(mockedNotificationService.SendNotifications).toHaveBeenCalledTimes(0)
			})

			it("should throw an error if the course is not paid by the student", async () => {
				// Arrange
				const student = new Student(
					1,
					"Trainee Smith",
					new Date("1999-05-04"),
					"male",
					"trainee.smith@gmail.com",
					"+36301234567"
				)
				const courseId = 1
				const course = new Course(1, "TypeScript BASICS", 45000, 4, new Date("2024-01-12"))
				const expectedErrorMessage = `Course ${courseId} is not yet paid by student ${student.GetId()}.`

				mockedCourseRepository.GetCourseById.mockResolvedValue(course)
				mockedPaymentService.GetIsOrderPaid.mockResolvedValue(false)
				mockedCourseRepository.AddStudentToCourse.mockResolvedValue()
				mockedNotificationService.SendNotifications.mockResolvedValue()

				// Act & Assert
				await expect(sut.AddPaidStudentToCourse(student, courseId)).rejects.toThrow(
					expectedErrorMessage
				)

				expect(mockedCourseRepository.GetCourseById).toHaveBeenCalledTimes(1)
				expect(mockedPaymentService.GetIsOrderPaid).toHaveBeenCalledTimes(1)
				expect(mockedCourseRepository.AddStudentToCourse).toHaveBeenCalledTimes(0)
				expect(mockedNotificationService.SendNotifications).toHaveBeenCalledTimes(0)
			})
		})
	})
})
