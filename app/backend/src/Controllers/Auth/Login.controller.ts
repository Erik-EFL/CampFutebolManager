import { Request, Response } from 'express';
import Body from '../../middlewares/validations/Body.validate';
import LoginAuth from '../../services/Auth/Login.services';

export default class LoginController {
  login = async (req: Request, res: Response) => {
    const { email, password } = Body.validateBody(req.body);

    const token = await LoginAuth.login(email, password);

    res.status(200).json({ token });
  };

  validate = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    const token = Body.validateHeader(authorization as string);

    const role = await LoginAuth.validateLogin(token);

    res.status(200).json({ role });
  };
}
