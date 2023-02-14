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

    this.route.delete(
      '/:id',
      (req, res, next) => controller.delete(req, res, next),
    );
  }
}
