import express from 'express';
import CarRoutes from './routes/carRoutes';
import MotorcycleRoutes from './routes/motorcycleRoutes';
import ErrorMiddleware from './middlewares/ErrorMiddleware';
import HttpException from './utils/HttpException';

const carRoutes = new CarRoutes();
const motorcycleRoutes = new MotorcycleRoutes();

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();
    this.routes();
  }

  private routes(): void {
    this.app.use('/cars', carRoutes.route);
    this.app.use('/motorcycles', motorcycleRoutes.route);
    this.app.use((
      err: HttpException,
      req:express.Request,
      res: express.Response,
      next: express.NextFunction,
    ) => ErrorMiddleware.err(err, req, res, next));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }
}

const { app } = new App();

export default app;
