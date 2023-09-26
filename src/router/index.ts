import express from 'express';

import emojis from './emojis';

const router = express.Router();

export default (): express.Router => {
  emojis(router);
  return router;
};
