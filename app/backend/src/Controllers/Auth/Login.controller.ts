import { Request, Response, NextFunction } from 'express';
import JwtAuth from '../../services/Auth/Jwt.services';
import { validateBody, validateHeader } from '../../middlewares/validations/BodyLogin.validate';
import LoginAuth from '../../services/Auth/Login.services';

export default class LoginController {
  login = async (req: Request, res: Response) => {
    const { email, password } = validateBody(req.body);

    const token = await LoginAuth.login(email, password);

    res.status(200).json({ token });
  };

  validate = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    const token = validateHeader(authorization as string);

    const role = await LoginAuth.validateLogin(token);

    res.status(200).json({ role });
  };

  tokenValidation = async (req: Request, _res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    const token = validateHeader(authorization as string);

    JwtAuth.tokenVerify(token);

    next();
  };
}
