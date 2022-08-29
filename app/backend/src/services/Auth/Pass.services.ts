import * as bcrypt from 'bcryptjs';
import CustomError from '../../middlewares/errors/Custom.error';

export default class PassWordAuth extends CustomError {
  static comparePassword(dbPassword: string, password: string): boolean {
    const hashPassword = bcrypt.compareSync(password, dbPassword);
    if (!hashPassword) this.unauthorized('Incorrect email or password');
    return hashPassword;
  }
}
