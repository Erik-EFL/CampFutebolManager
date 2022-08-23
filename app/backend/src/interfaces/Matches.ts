interface IMatchRequest {
  homeTeam: number,
  awayTeam: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
}

interface IMatchUpdate {
  homeTeamGoals: number,
  awayTeamGoals: number,
}

export {
  IMatchRequest,
  IMatchUpdate,
};
