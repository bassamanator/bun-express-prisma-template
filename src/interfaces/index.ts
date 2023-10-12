import express from 'express';
import { JwtPayload } from 'jsonwebtoken';

export * from './ErrorResponse';
export * from './MessageResponse';

export interface JwtPayloadWithId extends JwtPayload {
  id: string;
}

export interface RequestWithIdentity extends express.Request {
  identity: string; // or whatever the type of 'identity' is
}
