export class Logger {
    logError(errorMessage, errorObject) {
        console.log(errorMessage);
        if (errorObject) {
            console.log(JSON.stringify(errorObject));
        }
    }
}
