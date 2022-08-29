import { IUser } from '../../../interfaces/User.interface';

const userLogin: IUser = {
  email: 'admin@admin.com',
  password: 'admin-pass',
};

const badRequestUser: IUser = {
  email: 'test@test.com',
  password: 'test_test',
};

const userLoginSuccess: IUser = {
  id: 0,
  email: 'admin@admin.com',
  password: 'admin-pass',
  username: 'admin',
  role: 'admin'
};

const usersMock = {
  userLogin, badRequestUser, userLoginSuccess,
}

export default usersMock;
