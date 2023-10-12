import express from 'express';

import { login, register, update } from '../controllers/authentication.ctrl';

export default (router: express.Router) => {
  router.post('/auth/register', register);
  router.post('/auth/login', login);
  router.patch('/auth/update', update);
};
