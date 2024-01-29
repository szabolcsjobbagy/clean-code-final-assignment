import { Lecturer } from "../../src/models/Lecturer.js"

describe("Lecturer", () => {
	let lecturer: Lecturer

	beforeEach(() => {
		lecturer = new Lecturer(
			1,
			"Trainer Taylor",
			new Date("1986-01-01"),
			"female",
			"trainer.taylor@gmail.com",
			"+36203539854"
		)
	})

	it("should set the lecturer's id", () => {
		const newValue = 2
		lecturer.SetId(newValue)
		expect(lecturer.GetId()).toEqual(2)
	})

	it("should set the lecturer's name", () => {
		const newValue = "Jack Bauer"
		lecturer.SetName(newValue)
		expect(lecturer.GetName()).toEqual(newValue)
	})

	it("should set the lecturer's birth date", () => {
		const newValue = new Date("2000-01-01")
		lecturer.SetBirthDate(newValue)
		expect(lecturer.GetBirthDate()).toEqual(newValue)
	})

	it("should set the lecturer's gender", () => {
		const newValue = "female"
		lecturer.SetGender(newValue)
		expect(lecturer.GetGender()).toEqual(newValue)
	})

	it("should set the lecturer's email address", () => {
		const newValue = "jack.bauer@gmail.com"
		lecturer.SetEmailAddress(newValue)
		expect(lecturer.GetEmailAddress()).toEqual(newValue)
	})

	it("should set the lecturer's phone number", () => {
		const newValue = "+36304567890"
		lecturer.SetPhoneNumber(newValue)
		expect(lecturer.GetPhoneNumber()).toEqual(newValue)
	})

	it("should set the lecturer's start date", () => {
		const newValue = new Date("2022-01-01")
		lecturer.SetStartDate(newValue)
		expect(lecturer.GetStartDate()).toEqual(newValue)
	})

	it("should return the lecturer's id", () => {
		expect(lecturer.GetId()).toEqual(1)
	})

	it("should return the lecturer's name", () => {
		expect(lecturer.GetName()).toEqual("Trainer Taylor")
	})

	it("should return the lecturer's birth date", () => {
		expect(lecturer.GetBirthDate()).toEqual(new Date("1986-01-01"))
	})

	it("should return the lecturer's gender", () => {
		expect(lecturer.GetGender()).toEqual("female")
	})

	it("should return the lecturer's email address", () => {
		expect(lecturer.GetEmailAddress()).toEqual("trainer.taylor@gmail.com")
	})

	it("should return the lecturer's phone number", () => {
		expect(lecturer.GetPhoneNumber()).toEqual("+36203539854")
	})

	it("should return the lecturer's start date", () => {
		expect(lecturer.GetStartDate()).toEqual(new Date())
	})
})
