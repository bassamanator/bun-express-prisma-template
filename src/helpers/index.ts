import jwt from 'jsonwebtoken';

export const createToken = (id: string, expiresIn = '3d') => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn,
  });
};

export * from './users';
