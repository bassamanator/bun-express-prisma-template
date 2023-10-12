import express from 'express';
import jwt from 'jsonwebtoken';
import { merge } from 'lodash';

import { getUserIdFromReq } from '../helpers';
import { JwtPayloadWithId } from '../interfaces';

export * from './middlewares';

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(404).json({ message: 'Denied' });

  const token = authorization.split(' ')[1];

  try {
    let id = jwt.verify(token, process.env.JWT_SECRET as string);
    id = (id as JwtPayloadWithId).id;
    merge(req, { identity: id });

    next();
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: 'Denied' });
  }
};

export const isOwner = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const currentUserId = getUserIdFromReq(req);

    if (!currentUserId) return res.sendStatus(403);

    // TODO Implement your own check here
    const isTheOwner = true;
    if (!isTheOwner) return res.sendStatus(403);

    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
