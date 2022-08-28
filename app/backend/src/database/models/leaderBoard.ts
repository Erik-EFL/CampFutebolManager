import db from '.';
import { leaderBoard, leaderBoardAway, leaderBoardHome } from './Query/Query';

export default class LeaderBoardQuery {
  static async teamLeaderBoardHome() {
    const dbQuery = leaderBoardHome;
    const [rows] = await db.query(dbQuery);
    return rows;
  }

  static async teamLeaderBoardAway() {
    const dbQuery = leaderBoardAway;
    const [rows] = await db.query(dbQuery);
    return rows;
  }

  static async teamLeaderBoard() {
    const dbQuery = leaderBoard;
    const rows = await db.query(dbQuery);
    return rows;
  }
}
