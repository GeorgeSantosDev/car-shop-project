import express from 'express';
import CarRoutes from './routes/carRoutes';

const carRoutes = new CarRoutes();

const app = express();

app.use(express.json());

app.use('/cars', carRoutes.route);

export default app;
