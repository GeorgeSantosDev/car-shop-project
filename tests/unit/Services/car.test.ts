import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/car.service';
import { carInput, carOutput, carsOutput } from '../../mocks/car.mocks';

const service = new CarService();

describe('Test car path', function () {
  it('should possible to register a new car', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);
    const result = await service.register(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('should possible to get all cars', async function () {
    sinon.stub(Model, 'find').resolves(carsOutput);
    const result = await service.findAll();

    expect(result).to.be.deep.equal(carsOutput);
  });

  it('should possible to get car by id', async function () {
    sinon.stub(Model, 'findById').resolves(carOutput);
    const result = await service.findById();

    expect(result).to.be.deep.equal(carOutput);
  });

  it('should throw an error message Car not found when id does not exit in db', async function () {
    sinon.stub(Model, 'findById').resolves({});
    try {
      await service.findById();
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });

  it('should throw an error message Invalid mongo id for invalid id format', async function () {
    sinon.stub(Model, 'findById').resolves({});
    try {
      await service.findById();
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });
});