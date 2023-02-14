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

  public async findAll(_req: Request, res: Response, _next: NextFunction) {
    const response = await this._service.findAll();

    return res.status(StatusCode.SUCESS).json(response);
  }

  public async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const response = await this._service.findById(id);

      return res.status(StatusCode.SUCESS).json(response);
    } catch (error) {
      next(error);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
  
      const {
        model,
        year,
        color,
        status,
        buyValue,
        category,
        engineCapacity,
      } = req.body as IMotorcycle;
      
      const updateMotorcycle = { model, year, color, status, buyValue, category, engineCapacity };
      const response = await this._service.update(id, updateMotorcycle);

      return res.status(StatusCode.SUCESS).json(response);
    } catch (error) {
      next(error);
    }
  }
}
