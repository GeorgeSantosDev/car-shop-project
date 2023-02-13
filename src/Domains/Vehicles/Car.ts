import { ICar } from '../../Interfaces';

export default class Car {
  private model: string;
  private year: number;
  private color: string;
  private status: boolean;
  private buyValue: number;
  private doorsQty: number;
  private seatsQty: number;
  private id: string | undefined;

  constructor(car: ICar) { 
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
    this.id = car.id;
  }

  public getModel() { 
    return this.model;
  }

  public setModel(model: string) { 
    this.model = model;
  }

  public getYear() { 
    return this.year;
  }

  public setYear(year: number) { 
    this.year = year;
  }

  public getColor() { 
    return this.color;
  }

  public setColor(color: string) { 
    this.color = color;
  }

  public getStatus() { 
    return this.status;
  }

  public setStatus(status: boolean) { 
    this.status = status;
  }

  public getBuyValue() { 
    return this.buyValue;
  }

  public setBuyValue(buyValue: number) { 
    this.buyValue = buyValue;
  }

  public getDoorsQty() { 
    return this.doorsQty;
  }

  public setDoorsQty(doorsQty: number) { 
    this.doorsQty = doorsQty;
  }

  public getSeatsQty() { 
    return this.seatsQty;
  }

  public setSeatsQty(seatsQty: number) { 
    this.seatsQty = seatsQty;
  }

  public getId() { 
    return this.id;
  }
}
