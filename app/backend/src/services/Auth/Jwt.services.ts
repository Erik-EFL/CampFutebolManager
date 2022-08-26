import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import IPayload from '../../interfaces/PayLoad.interface';
import CustomError from '../../middlewares/errors/Custom.error';

const JWT_SECRET = process.env.JWT_SECRET as string;

export default class JwtAuth extends CustomError {
  static sign(data: { email: string, role: string }) {
    const token = jwt.sign({ data }, JWT_SECRET);
    return token;
  }

  static tokenVerify = async (token: string) => {
    const { data: { email } } = jwt.verify(token, JWT_SECRET) as IPayload;

    if (!email) this.unauthorized('Token must be a valid token');

    return email;
  };
}
