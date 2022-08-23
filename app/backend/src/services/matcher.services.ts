import Match from '../database/models/match';
import Team from '../database/models/team';
import { IMatchRequest, IMatchUpdate } from '../interfaces/Matches';

export default class MatchService {
  static get = {
    all: async (): Promise<Match[]> => {
      const matches: Match[] = await Match.findAll({
        include: [{
          model: Team, as: 'teamHome', attributes: ['teamName'],
        }, { model: Team, as: 'teamAway', attributes: ['teamName'] }],
      });
      return matches;
    },

    inProgress: async (inProgress: boolean): Promise<Match[]> => {
      const progress: Match[] = await Match.findAll({
        include: [{
          model: Team, as: 'teamHome', attributes: ['teamName'],
        }, { model: Team, as: 'teamAway', attributes: ['teamName'] }],
        where: { inProgress },
      });

      return progress;
    },
  };

  static post = {
    create: async (
      { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals }: IMatchRequest,
    ): Promise<Match> => {
      const match = {
        homeTeam,
        awayTeam,
        homeTeamGoals,
        awayTeamGoals,
        inProgress: true,
      };

      const newMatch = await Match.create(match);
      return newMatch;
    },
  };

  static put = {
    update: async (id: number) => {
      const updatedMatch = await Match.update({ inProgress: false }, { where: { id } });
      return updatedMatch;
    },
  };

  static patch = {
    update: async (id: number, data: IMatchUpdate) => {
      const { homeTeamGoals, awayTeamGoals } = data;
      const updatedMatch = await Match.update(
        { homeTeamGoals, awayTeamGoals },
        { where: { id } },
      );
      return updatedMatch;
    },
  };
}
