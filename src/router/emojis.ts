import express from 'express';

import { getEmojis } from '../controllers/emojis';

export default (router: express.Router) => {
  router.get('/', (req, res) => {
    res.json({
      message: 'API - 👋🌎🌍🌏',
    });
  });
  router.get('/emojis', getEmojis);
};
