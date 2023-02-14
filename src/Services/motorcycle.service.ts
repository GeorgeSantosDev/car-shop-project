import MotorcycleODM from '../Models/ MotorcycleODM';
import AbstractODM from '../Models/AbstractODM';
import { IMotorcycle } from '../Interfaces';
import Motorcycle from '../Domains/Motorcycle';
import HttpException from '../utils/HttpException';
import StatusCode from '../utils/StatusCode';

const model = new MotorcycleODM();

export default class MotorcycleService {
  private _model: AbstractODM<IMotorcycle>;

  constructor(motorcycleModel: AbstractODM<IMotorcycle> = model) {
    this._model = motorcycleModel;
  }

  public async register(obj: IMotorcycle) {
    const response = await this._model.create(obj);
    if (response) {
      return new Motorcycle(response);
    }
    return null;
  }

  public async findAll() {
    const response = await this._model.findAll();

    return response.map((motorcycle) => new Motorcycle(motorcycle));
  }

  public async findById(id: string) {
    if (id.length !== 24) throw new HttpException(StatusCode.UNPROCESSABLE, 'Invalid mongo id');

    const response = await this._model.findById(id);

    if (!response) throw new HttpException(StatusCode.NOT_FOUND, 'Motorcycle not found');
    return new Motorcycle(response);
  }

  public async update(id: string, obj: IMotorcycle) {
    if (id.length !== 24) throw new HttpException(StatusCode.UNPROCESSABLE, 'Invalid mongo id');

    const response = await this._model.update(id, obj);

    if (!response) throw new HttpException(StatusCode.NOT_FOUND, 'Motorcycle not found');
    return new Motorcycle(response);
  }
}
