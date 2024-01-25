export class Person {
	constructor(
		private id: number,
		private name: string,
		private birthDate: Date,
		private gender: string,
		private emailAddress: string,
		private phoneNumber: string
	) {}

	public GetId() {
		return this.id
	}

	public GetName() {
		return this.name
	}

	public GetBirthDate() {
		return this.birthDate
	}

	public GetGender() {
		return this.gender
	}

	public GetEmailAddress() {
		return this.emailAddress
	}

	public GetPhoneNumber() {
		return this.phoneNumber
	}
}
