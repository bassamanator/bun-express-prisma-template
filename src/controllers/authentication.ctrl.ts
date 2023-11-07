import bcrypt from 'bcryptjs';
import express from 'express';

import { createToken, getUserByEmail } from '../helpers';

export type User = {
  email: string | null;
  emailVerified: boolean | null;
  id: string;
  password: string;
  passwordSalt: string | null;
};

export const register = async (req: express.Request, res: express.Response) => {
  const { email, password }: { email: string; password: string } = req.body;
  const hash = await bcrypt
    .hash(password, 10)
    .catch(() => res.status(500).end());

  // NOTE Implment user creation here
  const user = { email, password: hash as string };

  const token = createToken((user as User).id);

  return res.status(201).json({ user, token });
};

export const update = async (req: express.Request, res: express.Response) => {
  const {
    email,
    password: currentPassword,
    newPassword,
  }: { email: string; newPassword: string; password: string } = req.body;

  const user = await getUserByEmail(email);
  if (!user)
    return res.status(404).json({ message: 'Error changing password' });

  // NOTE Remove the followed rules
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore:next-line
  const match = await bcrypt.compare(currentPassword, user?.password as string);
  if (!match)
    return res.status(404).json({ message: 'Error changing password' });

  const hash = await bcrypt
    .hash(newPassword, 10)
    .catch(() => res.status(500).end());

  // NOTE Implement update here
  const update = { password: hash as string } as User;

  return res.status(201).json({ user: update }); // NOTE adjust return
};

export const login = async (req: express.Request, res: express.Response) => {
  const { email, password }: { email: string; password: string } = req.body;

  const user = await getUserByEmail(email);
  if (!user) return res.status(404).json({ message: 'User not found' });

  const match = await bcrypt.compare(
    password,
    (user as unknown as User).password,
  );
  if (!match) return res.status(404).json({ message: 'Wrong password' });

  const token = createToken((user as unknown as User).id);

  return res.status(200).json({ message: 'Successful login!', token });
};
