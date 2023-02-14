import CarODM from '../Models/CarODM';
import AbstractODM from '../Models/AbstractODM';
import { ICar } from '../Interfaces';
import Car from '../Domains/Car';
import HttpException from '../utils/HttpException';
import StatusCode from '../utils/StatusCode';

const model = new CarODM();

export default class CarService {
  private _model: AbstractODM<ICar>;

  constructor(carModel: AbstractODM<ICar> = model) {
    this._model = carModel;
  }

  public async register(obj: ICar) {
    const response = await this._model.create(obj);
    if (response) {
      return new Car(response);
    }
    return null;
  }

  public async findAll() {
    const response = await this._model.findAll();

    return response.map((car) => new Car(car));
  }

  public async findById(id: string) {
    if (id.length !== 24) throw new HttpException(StatusCode.UNPROCESSABLE, 'Invalid mongo id');

    const response = await this._model.findById(id);

    if (!response) throw new HttpException(StatusCode.NOT_FOUND, 'Car not found');
    return new Car(response);
  }

  public async update(id: string, obj: ICar) {
    if (id.length !== 24) throw new HttpException(StatusCode.UNPROCESSABLE, 'Invalid mongo id');

    const response = await this._model.update(id, obj);

    if (!response) throw new HttpException(StatusCode.NOT_FOUND, 'Car not found');
    return new Car(response);
  }

  public async delete(id: string) {
    if (id.length !== 24) throw new HttpException(StatusCode.UNPROCESSABLE, 'Invalid mongo id');

    const response = await this._model.delete(id);

    if (!response) throw new HttpException(StatusCode.NOT_FOUND, 'Car not found');
    return new Car(response);
  }
}
