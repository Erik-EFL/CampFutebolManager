import { Router } from 'express';
import LoginController from '../Controllers/Auth/Login.controller';

const login = Router();

const userLogin = new LoginController();

login.get('/validate', (req, res) => userLogin.validate(req, res));
login.post('/', (req, res) => userLogin.login(req, res));

export default login;
