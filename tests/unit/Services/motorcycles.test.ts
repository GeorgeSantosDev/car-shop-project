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
});