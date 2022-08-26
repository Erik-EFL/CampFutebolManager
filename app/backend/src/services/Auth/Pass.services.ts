import * as bcrypt from 'bcryptjs';
import CustomError from '../../middlewares/errors/Custom.error';

export default class PassWordAuth extends CustomError {
  status: number;
  constructor(status: number, message: string) {
    super(status, message);
    this.status = status;
    this.message = message;
  }

  static comparePassword(dbPassword: string, password: string): boolean {
    const hashPassword = bcrypt.compareSync(password, dbPassword);
    if (!hashPassword) this.unauthorized('Incorrect email or password');
    return hashPassword;
  }
}
