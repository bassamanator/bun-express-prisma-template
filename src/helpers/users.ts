import express from 'express';
import { get, pick } from 'lodash';

export const getUserByEmail = async (
  email: string,
): Promise<string | undefined> => {
  // NOTE implement
  return undefined;
};

export const getUserById = async (id: string): Promise<string | undefined> => {
  // NOTE implement
  return undefined;
};

export const getUserIdFromReq = (req: express.Request): string | undefined =>
  get(req, 'identity');

export const sanitizeUser = (user: User) =>
  pick(user, ['id', 'email', 'emailVerified']);
