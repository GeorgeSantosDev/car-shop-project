import MotorcycleODM from '../Models/ MotorcycleODM';
import AbstractODM from '../Models/AbstractODM';
import { IMotorcycle } from '../Interfaces';
import Motorcycle from '../Domains/Motorcycle';

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
}
