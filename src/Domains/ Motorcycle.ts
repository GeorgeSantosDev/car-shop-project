import { IMotorcycle } from '../Interfaces';

export default class Motorcycle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor(car: IMotorcycle) { 
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status || false;
    this.buyValue = car.buyValue;
    this.category = car.category;
    this.engineCapacity = car.engineCapacity;
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

  public getCategory() { 
    return this.category;
  }

  public setCategory(category: string) { 
    this.category = category;
  }

  public getEngineCapacity() { 
    return this.engineCapacity;
  }

  public setEngineCapacity(engineCapacity: number) { 
    this.engineCapacity = engineCapacity;
  }

  public getId() { 
    return this.id;
  }
}
