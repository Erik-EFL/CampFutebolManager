import { Request, Response } from 'express';
import TeamService from '../services/teams.services';

export default class TeamController {
  get = {
    all: async (_req: Request, res: Response) => {
      const teams = await TeamService.get.all();
      return res.status(200).json(teams);
    },
    one: async (req: Request, res: Response) => {
      const { id } = req.params;
      const team = await TeamService.get.one(Number(id));

      res.status(200).json(team);
    },
  };
}
