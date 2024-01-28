import { Student } from "../../src/models/Student"

let sut: Student

beforeEach(() => {
	sut = new Student(
		1,
		"Trainee Smith",
		new Date("1999-05-04"),
		"male",
		"trainee.smith@gmail.com",
		"+36301234567"
	)
})

describe("Student", () => {
	describe("GetRegistrationDate", () => {
		describe("Happy paths", () => {
			it("should get registration date", async () => {
				// Arrange
				const registrationDate = new Date()

				// Act
				sut.SetRegistrationDate(registrationDate)
				const result = sut.GetRegistrationDate()

				// Assert
				expect(result).toBe(registrationDate)
			})
		})

		describe("Error paths", () => {})
	})

	describe("SetRegistrationDate", () => {
		describe("Happy paths", () => {
			it("should set registration date", async () => {
				// Arrange
				const registrationDate = new Date()

				// Act
				sut.SetRegistrationDate(registrationDate)
				const result = sut.GetRegistrationDate()

				// Assert
				expect(result).toBe(registrationDate)
			})
		})

		describe("Error paths", () => {})
	})
})
