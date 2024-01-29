import { Person } from "../../src/models/Person.js"

describe("Person", () => {
	let person: Person

	beforeEach(() => {
		person = new Person(
			1,
			"Trainee Smith",
			new Date("1999-05-04"),
			"male",
			"trainee.smith@gmail.com",
			"+36301234567"
		)
	})

	it("should set the person's id", () => {
		const newValue = 2
		person.SetId(newValue)
		expect(person.GetId()).toEqual(2)
	})

	it("should set the person's name", () => {
		const newValue = "Jack Bauer"
		person.SetName(newValue)
		expect(person.GetName()).toEqual(newValue)
	})

	it("should set the person's birth date", () => {
		const newValue = new Date("2000-01-01")
		person.SetBirthDate(newValue)
		expect(person.GetBirthDate()).toEqual(newValue)
	})

	it("should set the person's gender", () => {
		const newValue = "female"
		person.SetGender(newValue)
		expect(person.GetGender()).toEqual(newValue)
	})

	it("should set the person's email address", () => {
		const newValue = "jack.bauer@gmail.com"
		person.SetEmailAddress(newValue)
		expect(person.GetEmailAddress()).toEqual(newValue)
	})

	it("should set the person's phone number", () => {
		const newValue = "+36304567890"
		person.SetPhoneNumber(newValue)
		expect(person.GetPhoneNumber()).toEqual(newValue)
	})

	it("should return the person's id", () => {
		expect(person.GetId()).toEqual(1)
	})

	it("should return the person's name", () => {
		expect(person.GetName()).toEqual("Trainee Smith")
	})

	it("should return the person's birth date", () => {
		expect(person.GetBirthDate()).toEqual(new Date("1999-05-04"))
	})

	it("should return the person's gender", () => {
		expect(person.GetGender()).toEqual("male")
	})

	it("should return the person's email address", () => {
		expect(person.GetEmailAddress()).toEqual("trainee.smith@gmail.com")
	})

	it("should return the person's phone number", () => {
		expect(person.GetPhoneNumber()).toEqual("+36301234567")
	})
})
