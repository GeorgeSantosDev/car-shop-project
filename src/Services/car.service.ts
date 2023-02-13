import CarODM from '../Models/CarODM';
import AbstractODM from '../Models/AbstractODM';
import { ICar } from '../Interfaces';
import Car from '../Domains/Vehicles/Car';

const model = new CarODM();

export default class CarService {
  private _model: AbstractODM<ICar>;
  
  constructor(carModel: AbstractODM<ICar> = model) {
    this._model = carModel;
  }

  public async register(obj: ICar) {
    const response = await this._model.create(obj);
    return new Car(response);
  }
}
