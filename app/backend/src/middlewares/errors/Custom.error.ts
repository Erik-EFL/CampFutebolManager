export default class CustomError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }

  static notFound(message: string) {
    throw new CustomError(404, message);
  }

  static badRequest(message: string) {
    throw new CustomError(400, message);
  }

  static unauthorized(message: string) {
    throw new CustomError(401, message);
  }

  static conflict(message: string) {
    throw new CustomError(409, message);
  }

  static serverError(message: string) {
    throw new CustomError(500, message);
  }
}
