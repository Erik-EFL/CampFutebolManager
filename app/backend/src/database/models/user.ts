import { STRING, INTEGER, Model } from 'sequelize';
import db from '.';

export default class User extends Model {
  declare id: number;
  declare username: string;
  declare password: string;
  declare email: string;
  declare role: string;
}

User.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  role: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'users',
  tableName: 'users',
  timestamps: false,
});
