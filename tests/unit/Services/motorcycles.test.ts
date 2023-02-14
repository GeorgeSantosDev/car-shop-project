import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/motorcycle.service';
import { motorcycleInput, motorcycleOutput, motorcyclesOutput } from '../../mocks/motorcycles.mock';
import HttpException from '../../../src/utils/HttpException';

const service = new MotorcycleService();

describe('Test motorcycles path', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('Test if is possible to register new motorcycles', function () {
    it('should possible to register a new motorcycles', async function () {
      sinon.stub(Model, 'create').resolves(motorcycleOutput);
      const result = await service.register(motorcycleInput);

      expect(result).to.be.deep.equal(motorcycleOutput);
    });
  });

  describe('Test if is possible to get motorcycles', function () {
    it('should possible to get all motorcycles', async function () {
      sinon.stub(Model, 'find').resolves(motorcyclesOutput);
      const result = await service.findAll();

      expect(result).to.be.deep.equal(motorcyclesOutput);
    });

    it('should possible to get motorcycles by id', async function () {
      sinon.stub(Model, 'findById').resolves(motorcycleOutput);
      const result = await service.findById('6348513f34c397abcad040b2');

      expect(result).to.be.deep.equal(motorcycleOutput);
    });

    it(
      'should throw an error message Motorcycle not found when id does not exist in db',
      async function () {
        sinon.stub(Model, 'findById').resolves(null);
        try {
          await service.findById('6348513f34c397abcad040b2');
        } catch (error) {
          expect((error as HttpException).message).to.be.equal('Motorcycle not found');
        }
      },
    );

    it('should throw an error message Invalid mongo id for invalid id format', async function () {
      sinon.stub(Model, 'findById').resolves();
      try {
        await service.findById('5');
      } catch (error) {
        expect((error as HttpException).message).to.be.equal('Invalid mongo id');
      }
    });
  });

  describe('Test if is possible to update a motorcycle', function () {
    it('should possible to update a motorcycle', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleOutput);
      const result = await service.update('6348513f34c397abcad040b2', motorcycleInput);

      expect(result).to.be.deep.equal(motorcycleOutput);
    });

    it(
      'should throw an error message Motorcycle not found when id does not exit in db',
      async function () {
        sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
        try {
          await service.update('6348513f34c397abcad040b2', motorcycleInput);
        } catch (error) {
          expect((error as HttpException).message).to.be.equal('Motorcycle not found');
        }
      },
    );

    it('should throw an error message Invalid mongo id for invalid id format', async function () {
      sinon.stub(Model, 'findById').resolves();
      try {
        await service.update('5', motorcycleInput);
      } catch (error) {
        expect((error as HttpException).message).to.be.equal('Invalid mongo id');
      }
    });
  });

  describe('Test if is possible to delete a motorcycle', function () {
    it('should possible to delete motorcycle', async function () {
      sinon.stub(Model, 'findByIdAndDelete').resolves(motorcycleOutput);
      const result = await service.delete('6348513f34c397abcad040b2');

      expect(result).to.be.deep.equal(motorcycleOutput);
    });

    it(
      'should throw an error message Motorcycle not found when id does not exit in db',
      async function () {
        sinon.stub(Model, 'findByIdAndDelete').resolves(null);
        try {
          await service.delete('6348513f34c397abcad040b2');
        } catch (error) {
          expect((error as HttpException).message).to.be.equal('Motorcycle not found');
        }
      },
    );

    it('should throw an error message Invalid mongo id for invalid id format', async function () {
      sinon.stub(Model, 'findByIdAndDelete').resolves();
      try {
        await service.delete('5');
      } catch (error) {
        expect((error as HttpException).message).to.be.equal('Invalid mongo id');
      }
    });
  });
});