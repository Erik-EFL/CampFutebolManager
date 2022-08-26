import { Request, Response } from 'express';
import LeaderBoardService from '../services/leaderBoard.services';

export default class LeaderBoardController {
  get = {
    teamLeaderBoardHome: async (_req: Request, res: Response) => {
      const leaderBoard = await LeaderBoardService.get.teamLeaderBoardHome();
      res.status(200).json(leaderBoard);
    },
  };
}
