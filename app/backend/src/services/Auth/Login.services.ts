import User from '../../database/models/user';
import CustomError from '../../middlewares/errors/Custom.error';
import JwtAuth from './Jwt.services';
import PassWordAuth from './Pass.services';

export default class LoginAuth {
  static findUserByEmail = async (email: string): Promise<User | null> => {
    const user = await User.findOne({
      where: { email },
    });

    return user;
  };

  static login = async (email: string, password: string): Promise<string> => {
    const user = await this.findUserByEmail(email);
    console.log(user);
    const userPass = user?.password as string;

    if (!user || !password) {
      throw new CustomError(401, 'Incorrect email or password');
    }

    PassWordAuth.comparePassword(userPass, password);

    const token = JwtAuth.sign({
      email,
      password,
    });

    return token;
  };

  static validateLogin = async (token: string): Promise<string> => {
    const email = await JwtAuth.tokenVerify(token);
    const user = await this.findUserByEmail(email);

    if (!user) {
      throw new CustomError(401, 'Incorrect email or password');
    }

    const { role } = user;

    return role;
  };
}
