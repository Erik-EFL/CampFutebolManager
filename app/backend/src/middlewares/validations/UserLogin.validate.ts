import User from '../../database/models/user';
import CustomError from '../errors/Custom.error';

const validateUser = (data: User | null) => {
  if (!data) {
    throw new CustomError(401, 'Incorrect email or password');
  }

  return data;
};

export default validateUser;
