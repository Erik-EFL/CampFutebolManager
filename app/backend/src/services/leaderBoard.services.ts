import LeaderBoardQuery from '../database/models/leaderBoard';

export default class LeaderBoardService {
  static get = {
    teamLeaderBoard: async () => {
      const leaderBoard = await LeaderBoardQuery.teamLeaderBoard();
      return leaderBoard;
    },
    teamLeaderBoardHome: async () => {
      const leaderBoard = await LeaderBoardQuery.teamLeaderBoardHome();
      return leaderBoard;
    },
    teamLeaderBoardAway: async () => {
      const leaderBoard = await LeaderBoardQuery.teamLeaderBoardAway();
      return leaderBoard;
    },
  };
}
