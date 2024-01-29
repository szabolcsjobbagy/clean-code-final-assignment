import { Student } from "../../src/models/Student.js"

describe("Student", () => {
	let student: Student

	beforeEach(() => {
		student = new Student(
			1,
			"Trainee Smith",
			new Date("1999-05-04"),
			"male",
			"trainee.smith@gmail.com",
			"+36301234567"
		)
	})

	it("should set the student's id", () => {
		const newValue = 2
		student.SetId(newValue)
		expect(student.GetId()).toEqual(2)
	})

	it("should set the student's name", () => {
		const newValue = "Jack Bauer"
		student.SetName(newValue)
		expect(student.GetName()).toEqual(newValue)
	})

	it("should set the student's birth date", () => {
		const newValue = new Date("2000-01-01")
		student.SetBirthDate(newValue)
		expect(student.GetBirthDate()).toEqual(newValue)
	})

	it("should set the student's gender", () => {
		const newValue = "female"
		student.SetGender(newValue)
		expect(student.GetGender()).toEqual(newValue)
	})

	it("should set the student's email address", () => {
		const newValue = "jack.bauer@gmail.com"
		student.SetEmailAddress(newValue)
		expect(student.GetEmailAddress()).toEqual(newValue)
	})

	it("should set the student's phone number", () => {
		const newValue = "+36304567890"
		student.SetPhoneNumber(newValue)
		expect(student.GetPhoneNumber()).toEqual(newValue)
	})

	it("should set the student's registration date", () => {
		const newValue = new Date("2022-01-01")
		student.SetRegistrationDate(newValue)
		expect(student.GetRegistrationDate()).toEqual(newValue)
	})

	it("should return the student's id", () => {
		expect(student.GetId()).toEqual(1)
	})

	it("should return the student's name", () => {
		expect(student.GetName()).toEqual("Trainee Smith")
	})

	it("should return the student's birth date", () => {
		expect(student.GetBirthDate()).toEqual(new Date("1999-05-04"))
	})

	it("should return the student's gender", () => {
		expect(student.GetGender()).toEqual("male")
	})

	it("should return the student's email address", () => {
		expect(student.GetEmailAddress()).toEqual("trainee.smith@gmail.com")
	})

	it("should return the student's phone number", () => {
		expect(student.GetPhoneNumber()).toEqual("+36301234567")
	})

	it("should return the student's registration date", () => {
		expect(student.GetRegistrationDate().toISOString().slice(0, 10)).toEqual(
			new Date().toISOString().slice(0, 10)
		)
	})
})
