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

  private validadteMongoId(id: string): void {
    if (id.length !== 24) throw new HttpException(StatusCode.UNPROCESSABLE, 'Invalid mongo id');
  }

  private validateIfIdExist(response: ICar | null): void {
    if (!response) throw new HttpException(StatusCode.NOT_FOUND, 'Car not found');
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
    this.validadteMongoId(id);

    const response = await this._model.findById(id);

    this.validateIfIdExist(response);
    return new Car(response as ICar);
  }

  public async update(id: string, obj: ICar) {
    this.validadteMongoId(id);

    const response = await this._model.update(id, obj);

    this.validateIfIdExist(response);
    return new Car(response as ICar);
  }

  public async delete(id: string) {
    this.validadteMongoId(id);

    const response = await this._model.delete(id);

    this.validateIfIdExist(response);
    return new Car(response as ICar);
  }
}
