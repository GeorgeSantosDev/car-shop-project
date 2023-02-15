import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/car.service';
import { carInput, carOutput, carsOutput } from '../../mocks/car.mocks';
import HttpException from '../../../src/utils/HttpException';

const service = new CarService();

const idNotFoundMessage = 'Car not found';
const invalidIdMessage = 'Invalid mongo id';

describe('Test car path', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('Test if is possible to create register new car', function () {
    it('should possible to register a new car', async function () {
      sinon.stub(Model, 'create').resolves(carOutput);
      const result = await service.register(carInput);

      expect(result).to.be.deep.equal(carOutput);
    });
  });

  describe('Test if is possible to get cars', function () {
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

    it(
      'should throw an error message Car  not found when id does not exit in db',
      async function () {
        sinon.stub(Model, 'findById').resolves(null);
        try {
          await service.findById('6348513f34c397abcad040b2');
        } catch (error) {
          expect((error as HttpException).message).to.be.equal(idNotFoundMessage);
        }
      },
    );

    it('should throw an  error message Invalid mongo id for invalid id format', async function () {
      sinon.stub(Model, 'findById').resolves();
      try {
        await service.findById('5');
      } catch (error) {
        expect((error as HttpException).message).to.be.equal(invalidIdMessage);
      }
    });
  });

  describe('Test if is possible to update a car', function () {
    it('should possible to update a car', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput);
      const result = await service.update('6348513f34c397abcad040b2', carInput);

      expect(result).to.be.deep.equal(carOutput);
    });

    it(
      'should throw an error message Car not found when id does not exit in db',
      async function () {
        sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
        try {
          await service.update('6348513f34c397abcad040b2', carInput);
        } catch (error) {
          expect((error as HttpException).message).to.be.equal(idNotFoundMessage);
        }
      },
    );

    it('should throw an error message Invalid mongo id for invalid id format', async function () {
      sinon.stub(Model, 'findById').resolves();
      try {
        await service.update('5', carInput);
      } catch (error) {
        expect((error as HttpException).message).to.be.equal(invalidIdMessage);
      }
    });
  });

  describe('Test if is possible to delete a car', function () {
    it('should possible to delete car', async function () {
      sinon.stub(Model, 'findByIdAndDelete').resolves(carOutput);
      const result = await service.delete('6348513f34c397abcad040b2');

      expect(result).to.be.deep.equal(carOutput);
    });

    it(
      'should throw an error message Car not found when id does not exit in db',
      async function () {
        sinon.stub(Model, 'findByIdAndDelete').resolves(null);
        try {
          await service.delete('6348513f34c397abcad040b2');
        } catch (error) {
          expect((error as HttpException).message).to.be.equal(idNotFoundMessage);
        }
      },
    );

    it('should throw an error message Invalid mongo id for invalid id format', async function () {
      sinon.stub(Model, 'findById').resolves();
      try {
        await service.delete('5');
      } catch (error) {
        expect((error as HttpException).message).to.be.equal(invalidIdMessage);
      }
    });
  });
});
