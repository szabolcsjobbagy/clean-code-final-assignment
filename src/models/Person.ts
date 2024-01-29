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

	public SetId(id: number) {
		this.id = id
	}

	public SetName(name: string) {
		this.name = name
	}

	public SetBirthDate(birthDate: Date) {
		this.birthDate = birthDate
	}

	public SetGender(gender: string) {
		this.gender = gender
	}

	public SetEmailAddress(emailAddress: string) {
		this.emailAddress = emailAddress
	}

	public SetPhoneNumber(phoneNumber: string) {
		this.phoneNumber = phoneNumber
	}
}
