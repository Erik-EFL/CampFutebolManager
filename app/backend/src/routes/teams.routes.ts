import { Router } from 'express';
// import LoginController from '../Controllers/Auth/Login.controller';
import TeamController from '../Controllers/teams.controller';

const teams = Router();

/* const auth = new LoginController(); */
const team = new TeamController();

teams.get('/:id', /* auth.tokenValidation, */ (req, res) => team.get.one(req, res));
teams.get('/', /* auth.tokenValidation, */ (req, res) => team.get.all(req, res));

export default teams;
