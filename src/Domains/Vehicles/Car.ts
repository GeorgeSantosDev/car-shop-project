import { ICar } from '../../Interfaces';

export default class Car {
  private _carDefinitions: ICar;

  constructor(carDefinitions: ICar) { this._carDefinitions = carDefinitions; }

  public getModel() { 
    return this._carDefinitions.model;
  }

  public setModel(model: string) { 
    this._carDefinitions.model = model;
  }

  public getYear() { 
    return this._carDefinitions.year;
  }

  public setYear(year: number) { 
    this._carDefinitions.year = year;
  }

  public getColor() { 
    return this._carDefinitions.color;
  }

  public setColor(color: string) { 
    this._carDefinitions.color = color;
  }

  public getStatus() { 
    return this._carDefinitions.status;
  }

  public setStatus(status: boolean) { 
    this._carDefinitions.status = status;
  }

  public getBuyValue() { 
    return this._carDefinitions.buyValue;
  }

  public setBuyValue(buyValue: number) { 
    this._carDefinitions.buyValue = buyValue;
  }

  public getDoorsQty() { 
    return this._carDefinitions.doorsQty;
  }

  public setDoorsQty(doorsQty: number) { 
    this._carDefinitions.doorsQty = doorsQty;
  }

  public getSeatsQty() { 
    return this._carDefinitions.seatsQty;
  }

  public setSeatsQty(seatsQty: number) { 
    this._carDefinitions.seatsQty = seatsQty;
  }
}
