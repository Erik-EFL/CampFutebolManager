import User from '../../database/models/user';
import CustomError from '../../middlewares/errors/Custom.error';
import JwtAuth from './Jwt.services';
import PassWordAuth from './Pass.services';

export default class LoginAuth extends CustomError {
  static findUserByEmail = async (email: string): Promise<User | null> => {
    const user = await User.findOne({
      where: { email },
    });
    return user;
  };

  static login = async (email: string, password: string): Promise<string> => {
    const user = await this.findUserByEmail(email);

    const userPass = user?.password as string;
    const role = user?.role as string;

    if (!user || !password) this.unauthorized('Incorrect email or password');

    PassWordAuth.comparePassword(userPass, password);

    const token = JwtAuth.sign({
      email,
      role,
    });

    return token;
  };

  static validateLogin = async (token: string): Promise<string> => {
    const email = await JwtAuth.tokenVerify(token);
    const user = await this.findUserByEmail(email);

    if (!user) {
      this.unauthorized('Incorrect email or password');
    }

    const role = user?.role as string;

    return role;
  };
}
