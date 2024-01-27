export class UserRepositoryError extends Error {
	public constructor(message: string, public originalError?: Error) {
		super(message)
		this.name = this.constructor.name
	}
}
