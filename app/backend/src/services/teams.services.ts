import Team from '../database/models/team';
import CustomError from '../middlewares/errors/Custom.error';

export default class TeamService {
  static get = {
    all: async (): Promise<Team[]> => {
      const allTeams = await Team.findAll();
      return allTeams;
    },
    one: async (id: number): Promise<Team> => {
      const team = await Team.findOne({
        where: { id },
      });

      if (!team) throw new CustomError(404, 'Team not Found!');

      return team;
    },
  };
}
