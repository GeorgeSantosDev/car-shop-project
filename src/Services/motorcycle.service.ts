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

  private validadteMongoId(id: string): void {
    if (id.length !== 24) throw new HttpException(StatusCode.UNPROCESSABLE, 'Invalid mongo id');
  }

  private validateIfIdExist(response: IMotorcycle | null): void {
    if (!response) throw new HttpException(StatusCode.NOT_FOUND, 'Motorcycle not found');
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
    this.validadteMongoId(id);

    const response = await this._model.findById(id);

    this.validateIfIdExist(response);
    return new Motorcycle(response as IMotorcycle);
  }

  public async update(id: string, obj: IMotorcycle) {
    this.validadteMongoId(id);

    const response = await this._model.update(id, obj);

    this.validateIfIdExist(response);
    return new Motorcycle(response as IMotorcycle);
  }

  public async delete(id: string) {
    this.validadteMongoId(id);

    const response = await this._model.delete(id);

    this.validateIfIdExist(response);
    return response;
  }
}
