import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = async (err, _req, res, next) => {
  const { status, message } = err;

  res.status(status).send({ message });

  next();
};

export default errorMiddleware;
