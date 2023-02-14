import { NextFunction, Request, Response } from 'express';
import { IMotorcycle } from '../Interfaces';
import MotorcycleService from '../Services/motorcycle.service';
import StatusCode from '../utils/StatusCode';

const service = new MotorcycleService();

export default class MotorcycleController {
  private _service: MotorcycleService;

  constructor(
    motorcycleService: MotorcycleService = service,
  ) {
    this._service = motorcycleService;
  }

  public async register(req: Request, res: Response, _next: NextFunction) {
    const {
      model,
      year,
      color,
      status,
      buyValue,
      category,
      engineCapacity,
    } = req.body as IMotorcycle;

    const newMotorcycle = { model, year, color, status, buyValue, category, engineCapacity };

    const response = await this._service.register(newMotorcycle);
    return res.status(StatusCode.CREATED).json(response);
  }
}
