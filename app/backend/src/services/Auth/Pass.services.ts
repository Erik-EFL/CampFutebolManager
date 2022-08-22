import * as bcrypt from 'bcryptjs';
import CustomError from '../../middlewares/errors/Custom.error';

export default class PassWordAuth {
  static comparePassword(dbPassword: string, password: string): boolean {
    const hashPassword = bcrypt.compareSync(password, dbPassword);
    if (!hashPassword) throw new CustomError(401, 'Incorrect email or password');
    return hashPassword;
  }
}
