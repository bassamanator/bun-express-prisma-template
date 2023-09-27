import express from 'express';

import { getEmojis } from '../controllers/emojis.ctrl';

export default (router: express.Router) => {
  router.get('/emojis', getEmojis);
};
