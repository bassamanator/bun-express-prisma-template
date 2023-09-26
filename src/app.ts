import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import MessageResponse from './interfaces/MessageResponse';
import * as middlewares from './middleware';
import router from './router';

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(express.json());

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use('/api/v1', router());

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
