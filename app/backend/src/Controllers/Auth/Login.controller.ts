import { Request, Response } from 'express';
import CustomError from '../../middlewares/errors/Custom.error';
import LoginAuth from '../../services/Auth/Login.services';

export default class LoginController {
  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ message: 'All fields must be filled' });

    const token = await LoginAuth.login(email, password);

    res.status(200).json({ token });
  };

  validate = async (req: Request, res: Response) => {
    const { authorization: token } = req.headers;

    if (!token) throw new CustomError(401, 'You must pass a token');

    const role = await LoginAuth.validateLogin(token);

    res.status(200).json({ role });
  };
}
