export class Logger {
	public logError(errorMessage: string, errorObject?: Error) {
		console.log(errorMessage)
		if (errorObject) {
			console.log(JSON.stringify(errorObject))
		}
	}
}
