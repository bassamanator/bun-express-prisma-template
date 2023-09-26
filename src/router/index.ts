import express from 'express';

import emojis from './emojis';

const router = express.Router();

export default (): express.Router => {
  router.get('/', (req, res) => {
    res.json({
      message: 'API - 👋🌎🌍🌏',
    });
  });
  emojis(router);
  return router;
};
