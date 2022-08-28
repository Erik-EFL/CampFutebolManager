import { Request, Response } from 'express';
import LeaderBoardService from '../services/leaderBoard.services';

export default class LeaderBoardController {
  get = {
    teamLeaderBoard: async (_req: Request, res: Response) => {
      const leaderBoard = await LeaderBoardService.get.teamLeaderBoard();
      res.status(200).json(leaderBoard);
    },
    teamLeaderBoardHome: async (_req: Request, res: Response) => {
      const leaderBoard = await LeaderBoardService.get.teamLeaderBoardHome();
      res.status(200).json(leaderBoard);
    },
    teamLeaderBoardAway: async (_req: Request, res: Response) => {
      const leaderBoard = await LeaderBoardService.get.teamLeaderBoardAway();
      res.status(200).json(leaderBoard);
    },
  };
}
