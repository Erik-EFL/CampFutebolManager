import Team from '../../database/models/team';
import CustomError from '../errors/Custom.error';

export default class Validate extends CustomError {
  private static _if = {
    aValidTeam: (teamOne: number, teamTwo: number) => {
      if (teamOne === teamTwo) {
        this.unauthorized('It is not possible to create a match with two equal teams');
      }
    },
    exist: async (team: number) => {
      const teamFound = await Team.findByPk(team);
      return teamFound ? true : this.notFound('There is no team with such id!');
    },
  };

  static Tams = async (home: number, away: number) => {
    await Validate._if.exist(home);
    await Validate._if.exist(away);
    Validate._if.aValidTeam(home, away);
  };
}
