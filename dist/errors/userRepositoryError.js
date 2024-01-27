export class UserRepositoryError extends Error {
    constructor(message, originalError) {
        super(message);
        this.originalError = originalError;
        this.name = this.constructor.name;
    }
}
