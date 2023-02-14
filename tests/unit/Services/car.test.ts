import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/car.service';
import { carInput, carOutput, carsOutput } from '../../mocks/car.mocks';
import HttpException from '../../../src/utils/HttpException';

const service = new CarService();

describe('Test car path', function () {
  afterEach(function () {
    sinon.restore();
  });

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
    const result = await service.findById('6348513f34c397abcad040b2');

    expect(result).to.be.deep.equal(carOutput);
  });

  it('should throw an error message Car not found when id does not exit in db', async function () {
    sinon.stub(Model, 'findById').resolves(null);
    try {
      await service.findById('6348513f34c397abcad040b2');
    } catch (error) {
      expect((error as HttpException).message).to.be.equal('Car not found');
    }
  });

  it('should throw an error message Invalid mongo id for invalid id format', async function () {
    sinon.stub(Model, 'findById').resolves();
    try {
      await service.findById('5');
    } catch (error) {
      expect((error as HttpException).message).to.be.equal('Invalid mongo id');
    }
  });
});
