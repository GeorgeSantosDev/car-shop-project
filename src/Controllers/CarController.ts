import { NextFunction, Request, Response } from 'express';
import { ICar } from '../Interfaces';
import CarService from '../Services/car.service';

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
    return res.status(201).json(response);
  }
}
