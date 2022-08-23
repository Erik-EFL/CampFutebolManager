/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Joi from 'joi';
import CustomError from '../errors/Custom.error';

const validateBody = (data: any) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  const { error, value } = schema.validate(data);

  if (error) {
    throw new CustomError(400, 'All fields must be filled');
  }

  return value;
};

const validateHeader = (data: string) => {
  const schema = Joi.object({
    token: Joi.string().required().token(),
  });

  const { value } = schema.validate(data);

  if (!value) {
    throw new CustomError(401, 'You must pass a token');
  }

  return value;
};

export {
  validateBody,
  validateHeader,
};
