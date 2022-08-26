/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Joi from 'joi';
import CustomError from '../errors/Custom.error';

export default class Body extends CustomError {
  static validateBody = (data: any) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });

    const { error, value } = schema.validate(data);

    if (error) {
      this.badRequest('All fields must be filled');
    }

    return value;
  };

  static validateHeader = (data: string) => {
    const schema = Joi.object({
      token: Joi.string().required().token(),
    });

    const { value } = schema.validate(data);

    if (!value) {
      this.unauthorized('You must pass a token');
    }

    return value;
  };
}
