import { Router } from 'express';
import CarController from '../Controllers/CarController';

const controller = new CarController();

export default class CarRoutes {
  constructor(public route = Router()) {
    this.route = route;

    this.route.post(
      '/',
      (req, res, next) => controller.register(req, res, next),
    );
  }
}
