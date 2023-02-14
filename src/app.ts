import express from 'express';
import CarRoutes from './routes/carRoutes';
import ErrorMiddleware from './middlewares/ErrorMiddleware';
import HttpException from './utils/HttpException';

const carRoutes = new CarRoutes();

const app = express();

app.use(express.json());

app.use('/cars', carRoutes.route);

app.use((
  err: HttpException,
  req:express.Request,
  res: express.Response,
  next: express.NextFunction,
) => ErrorMiddleware.err(err, req, res, next));

export default app;
