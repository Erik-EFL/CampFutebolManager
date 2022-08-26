import 'dotenv/config';
import { Request, Response } from 'express';
import 'express-async-errors';
import { verify } from 'jsonwebtoken';
import IPayload from '../../interfaces/PayLoad.interface';
import CustomError from '../errors/Custom.error';
import Body from './Body.validate';

export default class Token extends CustomError {
  static async verify(req: Request, _res: Response) {
    const { authorization } = req.headers;
    const token = Body.validateHeader(authorization as string);
    try {
      const { data } = verify(token, process.env.JWT_SECRET as string) as IPayload;
      return data;
    } catch (error) {
      this.unauthorized('Token must be a valid token');
    }
  }
}
