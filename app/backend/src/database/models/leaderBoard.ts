import db from '.';
import leaderBoard from './Query/Query';

export default class LeaderBoardQuery {
  static async teamLeaderBoard() {
    const dbQuery = leaderBoard;
    const [rows] = await db.query(dbQuery);
    return rows;
  }
}
