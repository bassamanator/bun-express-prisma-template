import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import express from 'express';
import { createError } from 'http-errors-enhanced';
import { createToken, getUserByEmail, sanitizeUser } from '~/helpers';

const prisma = new PrismaClient();

export const register = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { email, password }: { email: string; password: string } = req.body;
  const hash = await bcrypt.hash(password, 10).catch(() => res.status(500).end());

  let user = null;
  try {
    user = await prisma.user.create({
      data: { email, password: hash as string },
    });
  } catch (error) {
    return next(error);
  }

  const token = createToken(user.id);

  return res.status(201).json({ token, ...sanitizeUser(user) });
};

export const update = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const {
    email,
    password: currentPassword,
    newPassword,
  }: { email: string; newPassword: string; password: string } = req.body;

  const user = await getUserByEmail(email);
  if (!user) return next(createError(404, 'Error changing password'));

  const match = await bcrypt.compare(currentPassword, user.password);
  if (!match) return next(createError(404, 'Error changing password'));

  const hash = await bcrypt.hash(newPassword, 10).catch(() => res.status(500).end());

  const update = await prisma.user.update({
    where: { id: user.id },
    data: { password: hash as string },
  });

  const token = createToken(update.id);

  return res.status(201).json({ token, ...sanitizeUser(update) });
};

export const login = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { email, password }: { email: string; password: string } = req.body;
  const user = await getUserByEmail(email);
  if (!user) return next(createError(418, 'User not found'));

  const match = await bcrypt.compare(password, user.password);
  if (!match) return next(createError(401, 'Wrong password'));

  const token = createToken(user.id);

  return res.status(200).json({ token, ...sanitizeUser(user) });
};
