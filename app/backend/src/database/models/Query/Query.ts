const leaderBoardHome = `
SELECT
tm.team_name AS name,
    SUM(IF(tfcMtc.home_team_goals > tfcMtc.away_team_goals, 3,
IF(tfcMtc.home_team_goals < tfcMtc.away_team_goals, 0, 1))) AS totalPoints,
    COUNT(tm.team_name) AS totalGames,
    SUM(IF(tfcMtc.home_team_goals > tfcMtc.away_team_goals, 1, 0)) AS totalVictories,
    SUM(IF(tfcMtc.home_team_goals = tfcMtc.away_team_goals, 1, 0)) AS totalDraws,
    SUM(IF(tfcMtc.home_team_goals < tfcMtc.away_team_goals, 1, 0)) AS totalLosses,
    SUM(tfcMtc.home_team_goals) AS goalsFavor,
    SUM(tfcMtc.away_team_goals) AS goalsOwn,
    SUM(tfcMtc.home_team_goals) - SUM(tfcMtc.away_team_goals) AS goalsBalance,
    TRIM(ROUND(SUM(IF(tfcMtc.home_team_goals > tfcMtc.away_team_goals, 3,
IF(tfcMtc.home_team_goals < tfcMtc.away_team_goals, 0,1)))
      / (COUNT(tm.team_name) * 3) * 100, 2)) + 0 AS efficiency
FROM TRYBE_FUTEBOL_CLUBE.teams AS tm
INNER JOIN TRYBE_FUTEBOL_CLUBE.matches AS tfcMtc
ON tm.id = tfcMtc.home_team
  GROUP BY tm.team_name, tfcMtc.in_progress
  HAVING tfcMtc.in_progress = 0
  ORDER BY
    totalPoints DESC ,
    totalVictories DESC ,
    goalsBalance DESC ,
    goalsFavor DESC ,
    goalsOwn DESC;
`;

const leaderBoardAway = `
SELECT
tm.team_name AS name,
    SUM(IF(tfcMtc.away_team_goals > tfcMtc.home_team_goals, 3,
IF(tfcMtc.away_team_goals < tfcMtc.home_team_goals, 0, 1))) AS totalPoints,
    COUNT(tm.team_name) AS totalGames,
    SUM(IF(tfcMtc.away_team_goals > tfcMtc.home_team_goals, 1, 0)) AS totalVictories,
    SUM(IF(tfcMtc.away_team_goals = tfcMtc.home_team_goals, 1, 0)) AS totalDraws,
    SUM(IF(tfcMtc.away_team_goals < tfcMtc.home_team_goals, 1, 0)) AS totalLosses,
    SUM(tfcMtc.away_team_goals) AS goalsFavor,
    SUM(tfcMtc.home_team_goals) AS goalsOwn,
    SUM(tfcMtc.away_team_goals) - SUM(tfcMtc.home_team_goals) AS goalsBalance,
    TRIM(ROUND(SUM(IF(tfcMtc.away_team_goals > tfcMtc.home_team_goals, 3,
IF(tfcMtc.away_team_goals < tfcMtc.home_team_goals, 0,1)))
      / (COUNT(tm.team_name) * 3) * 100, 2)) + 0 AS efficiency
FROM TRYBE_FUTEBOL_CLUBE.teams AS tm
INNER JOIN TRYBE_FUTEBOL_CLUBE.matches AS tfcMtc
ON tm.id = tfcMtc.away_team
  GROUP BY tm.team_name, tfcMtc.in_progress
  HAVING tfcMtc.in_progress = 0
  ORDER BY
    totalPoints DESC ,
    totalVictories DESC ,
    goalsBalance DESC ,
    goalsFavor DESC ,
    goalsOwn DESC;
`;

const leaderBoard = `
SELECT
tm.team_name AS name,
    SUM(IF(tfcMtc.away_team_goals > tfcMtc.home_team_goals, 3,
IF(tfcMtc.away_team_goals < tfcMtc.home_team_goals, 0, 1))) AS totalPoints,
    COUNT(tm.team_name) AS totalGames,
    SUM(IF(tfcMtc.away_team_goals > tfcMtc.home_team_goals, 1, 0)) AS totalVictories,
    SUM(IF(tfcMtc.away_team_goals = tfcMtc.home_team_goals, 1, 0)) AS totalDraws,
    SUM(IF(tfcMtc.away_team_goals < tfcMtc.home_team_goals, 1, 0)) AS totalLosses,
    SUM(tfcMtc.away_team_goals) AS goalsFavor,
    SUM(tfcMtc.home_team_goals) AS goalsOwn,
    SUM(tfcMtc.away_team_goals) - SUM(tfcMtc.home_team_goals) AS goalsBalance,
    TRIM(ROUND(SUM(IF(tfcMtc.away_team_goals > tfcMtc.home_team_goals, 3,
IF(tfcMtc.away_team_goals < tfcMtc.home_team_goals, 0,1)))
      / (COUNT(tm.team_name) * 3) * 100, 2)) + 0 AS efficiency
FROM TRYBE_FUTEBOL_CLUBE.teams AS tm
INNER JOIN TRYBE_FUTEBOL_CLUBE.matches AS tfcMtc
ON tm.id = tfcMtc.home_team
  GROUP BY tm.team_name, tfcMtc.in_progress
  HAVING tfcMtc.in_progress = 0
  ORDER BY
    totalPoints DESC,
    totalVictories DESC,
    goalsBalance DESC,
    goalsFavor DESC,
    goalsOwn DESC;
`;

export {
  leaderBoard,
  leaderBoardHome,
  leaderBoardAway,
};
