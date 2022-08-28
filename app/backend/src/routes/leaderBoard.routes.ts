import { Router } from 'express';
import LeaderBoardController from '../Controllers/leaderBoard.controller';

const ranking = new LeaderBoardController();
const leaderBoard = Router();

leaderBoard.get('/home', (req, res) => ranking.get.teamLeaderBoardHome(req, res));
leaderBoard.get('/away', (req, res) => ranking.get.teamLeaderBoardAway(req, res));
leaderBoard.get('/', (req, res) => ranking.get.teamLeaderBoard(req, res));

export default leaderBoard;
