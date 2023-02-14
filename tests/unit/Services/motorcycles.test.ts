import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/motorcycle.service';
import { motorcycleInput, motorcycleOutput } from '../../mocks/motorcycles.mock';

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
});