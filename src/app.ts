import express from 'express';
import CarRoutes from './routes/carRoutes';
import MotorcycleRoutes from './routes/motorcycleRoutes';
import ErrorMiddleware from './middlewares/ErrorMiddleware';
import HttpException from './utils/HttpException';

const carRoutes = new CarRoutes();
const motorcycleRoutes = new MotorcycleRoutes();

const app = express();

app.use(express.json());

app.use('/cars', carRoutes.route);
app.use('/motorcycles', motorcycleRoutes.route);

app.use((
  err: HttpException,
  req:express.Request,
  res: express.Response,
  next: express.NextFunction,
) => ErrorMiddleware.err(err, req, res, next));

export default app;
