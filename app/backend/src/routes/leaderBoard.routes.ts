import { Router } from 'express';
import LeaderBoardController from '../Controllers/leaderBoard.controller';

const ranking = new LeaderBoardController();
const leaderBoard = Router();

leaderBoard.get('/home', ranking.get.teamLeaderBoardHome);

export default leaderBoard;
