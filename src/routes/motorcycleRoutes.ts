import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const controller = new MotorcycleController();

export default class MotorcycleRoutes {
  constructor(public route = Router()) {
    this.route = route;

    this.route.post(
      '/',
      (req, res, next) => controller.register(req, res, next),
    );
  }
}
