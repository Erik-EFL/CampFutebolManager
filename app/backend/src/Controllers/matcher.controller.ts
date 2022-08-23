import { Request, Response } from 'express';
import validateTeam from '../middlewares/validations/Matcher.validate';
import MatchService from '../services/matcher.services';

export default class MatchController {
  get = {
    all: async (_req: Request, res: Response) => {
      const matches = await MatchService.get.all();

      res.status(200).json(matches);
    },

    inProgress: async (req: Request, res: Response) => {
      const { inProgress } = req.query;
      const progress = inProgress as string;

      const matches = await MatchService.get.inProgress(JSON.parse(progress));

      res.status(200).json(matches);
    },
  };

  post = {
    create: async (req: Request, res: Response): Promise<void> => {
      const { homeTeam, awayTeam } = req.body;

      validateTeam(homeTeam, awayTeam);

      const match = await MatchService.post.create(req.body);

      res.status(201).json(match);
    },
  };

  patch = {
    update: {
      finisMatch: async (req: Request, res: Response) => {
        const { id } = req.params;
        await MatchService.put.update(Number(id));
        res.status(200).json({ message: 'Finished' });
      },
      updateMatch: async (req: Request, res: Response) => {
        const { id } = req.params;
        const { homeTeamGoals, awayTeamGoals } = req.body;

        await MatchService.patch.update(Number(id), { homeTeamGoals, awayTeamGoals });

        res.status(200).json({ message: 'Updated' });
      },
    },
  };
}
