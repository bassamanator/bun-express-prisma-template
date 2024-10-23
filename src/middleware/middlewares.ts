import type { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { isHttpError } from 'http-errors';

import type ErrorResponse from '../interfaces/ErrorResponse';

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

export const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response<ErrorResponse>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  let statusCode = 500;
  if (isHttpError(err)) {
    statusCode = err.statusCode;
  }
  console.log(`❗ ${err.name}; ${statusCode};`);
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
};
