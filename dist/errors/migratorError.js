export class MigratorError extends Error {
    constructor(message, originalError) {
        super(message);
        this.originalError = originalError;
        this.name = this.constructor.name;
    }
}
