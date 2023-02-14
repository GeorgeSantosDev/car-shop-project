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

    this.route.get(
      '/',
      (req, res, next) => controller.findAll(req, res, next),
    );

    this.route.get(
      '/:id',
      (req, res, next) => controller.findById(req, res, next),
    );

    this.route.put(
      '/:id',
      (req, res, next) => controller.update(req, res, next),
    );
  }
}
