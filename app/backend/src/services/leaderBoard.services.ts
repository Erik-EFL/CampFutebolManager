import LeaderBoardQuery from '../database/models/leaderBoard';

export default class LeaderBoardService {
  static get = {
    teamLeaderBoardHome: async () => {
      const leaderBoard = await LeaderBoardQuery.teamLeaderBoard();
      return leaderBoard;
    },
  };
}
