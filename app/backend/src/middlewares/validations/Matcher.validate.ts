/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomError from '../errors/Custom.error';

const validateTeam = (teamOne: any, teamTwo: any) => {
  if (teamOne === teamTwo) {
    throw new CustomError(401, 'It is not possible to create a match with two equal teams');
  }
};

export default validateTeam;
