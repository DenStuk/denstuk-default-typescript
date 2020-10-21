export class RequestError extends Error {
    public statusCode;

    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;

        Object.setPrototypeOf(this, RequestError.prototype);
    }
}