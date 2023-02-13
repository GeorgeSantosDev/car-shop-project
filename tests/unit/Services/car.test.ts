import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { carInput, carOutput } from '../../mocks/car.mocks';

const service = new CarService();

describe('Test car path', function () {
  it('should possible to register a new car', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);
    const result = await service.register(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });
});