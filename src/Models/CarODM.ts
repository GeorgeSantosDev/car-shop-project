import { Schema } from 'mongoose';
import { ICar } from '../Interfaces';
import AbstractODM from './AbstractODM';

export default class Car extends AbstractODM<ICar> { 
  constructor() {
    const schema = new Schema<ICar>({ 
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });

    super(schema, 'Car');
  }
}
