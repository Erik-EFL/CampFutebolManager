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

export default validateBody;
