import { NextFunction, Request, Response } from 'express';
import { ICar } from '../Interfaces';
import CarService from '../Services/car.service';
import StatusCode from '../utils/StatusCode';

const service = new CarService();

export default class CarController {
  private _service: CarService;

  constructor(
    carService: CarService = service,
  ) {
    this._service = carService;
  }

  public async register(req: Request, res: Response, _next: NextFunction) {
    const {
      model,
      year,
      color,
      status,
      buyValue,
      doorsQty,
      seatsQty,
    } = req.body as ICar;

    const newCar = { model, year, color, status, buyValue, doorsQty, seatsQty };

    const response = await this._service.register(newCar);
    return res.status(StatusCode.CREATED).json(response);
  }

  public async findAll(req: Request, res: Response, _next: NextFunction) {
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
        doorsQty,
        seatsQty,
      } = req.body as ICar;

      const updateCar = { model, year, color, status, buyValue, doorsQty, seatsQty };
      const response = await this._service.update(id, updateCar);

      return res.status(StatusCode.SUCESS).json(response);
    } catch (error) {
      next(error);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const response = await this._service.delete(id);

      return res.status(StatusCode.DELETED).json(response);
    } catch (error) {
      next(error);
    }
  }
}
