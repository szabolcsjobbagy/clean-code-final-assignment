import { CourseStatistics } from "../../src/models/CourseStatistics.js"

describe("CourseStatistics", () => {
	let courseStatistics: CourseStatistics

	beforeEach(() => {
		courseStatistics = new CourseStatistics(1, 1, 1, 0, 0, new Date("2024-01-12"))
	})

	it("should return the correct id", () => {
		expect(courseStatistics.GetId()).toBe(1)
	})

	it("should return the correct courseId", () => {
		expect(courseStatistics.GetCourseId()).toBe(1)
	})

	it("should return the correct studentId", () => {
		expect(courseStatistics.GetStudentId()).toBe(1)
	})

	it("should return the correct totalLectures", () => {
		expect(courseStatistics.GetTotalLectures()).toBe(0)
	})

	it("should return the correct lecturesCompleted", () => {
		expect(courseStatistics.GetLecturesCompleted()).toBe(0)
	})

	it("should return the correct lastAccessed", () => {
		expect(courseStatistics.GetLastAccessed()).toStrictEqual(new Date("2024-01-12"))
	})

	it("should return the correct progress", () => {
		expect(courseStatistics.GetProgress()).toBe(0)
	})

	it("should set the id correctly", () => {
		courseStatistics.SetId(10)
		expect(courseStatistics.GetId()).toBe(10)
	})

	it("should set the courseId correctly", () => {
		courseStatistics.SetCourseId(20)
		expect(courseStatistics.GetCourseId()).toBe(20)
	})

	it("should set the studentId correctly", () => {
		courseStatistics.SetStudentId(30)
		expect(courseStatistics.GetStudentId()).toBe(30)
	})

	it("should set the totalLectures correctly", () => {
		courseStatistics.SetTotalLectures(15)
		expect(courseStatistics.GetTotalLectures()).toBe(15)
	})

	it("should set the lecturesCompleted correctly", () => {
		courseStatistics.SetLecturesCompleted(8)
		expect(courseStatistics.GetLecturesCompleted()).toBe(8)
	})

	it("should set the lastAccessed correctly", () => {
		const newDate = new Date()
		courseStatistics.SetLastAccessed(newDate)
		expect(courseStatistics.GetLastAccessed()).toBe(newDate)
	})

	it("should set the progress correctly", () => {
		courseStatistics.SetProgress(7, 10)
		expect(courseStatistics.GetProgress()).toBe(70)
	})
})
