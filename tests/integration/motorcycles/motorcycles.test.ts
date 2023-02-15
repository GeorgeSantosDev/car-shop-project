import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import { Model } from 'mongoose';
import app from '../../../src/app';

import { motorcycleInput, motorcycleOutput, motorcyclesOutput } from '../../mocks/motorcycles.mock';

chai.use(chaiHttp);

const idNotFoundMessage = 'Motorcycle not found';
const invalidIdMessage = 'Invalid mongo id';

describe('Test integration of motorcycles path', function () {
  afterEach(sinon.restore);

  describe('Test if is possible to create new motorcycle', function () {
    it('should return a new motorcycle registered and status 201', async function () {
      sinon.stub(Model, 'create').resolves(motorcycleOutput);

      const chaiHttpResponse = await chai.request(app).post('/motorcycles').send(motorcycleInput);

      const { body, status } = chaiHttpResponse;

      expect(body).to.be.deep.equal(motorcycleOutput);
      expect(status).to.be.equal(201);
    });
  });

  describe('Test if is possible to get motorcycles', function () {
    it('should return all motorcycles registered and status 200', async function () {
      sinon.stub(Model, 'find').resolves(motorcyclesOutput);

      const chaiHttpResponse = await chai.request(app).get('/motorcycles');

      const { body, status } = chaiHttpResponse;

      expect(body).to.be.deep.equal(motorcyclesOutput);
      expect(status).to.be.equal(200);
    });

    it('should return a motorcycle by id and status 200', async function () {
      sinon.stub(Model, 'findById').resolves(motorcycleOutput);

      const chaiHttpResponse = await chai.request(app).get('/motorcycles/6348513f34cre6abcad040b2');

      const { body, status } = chaiHttpResponse;

      expect(body).to.be.deep.equal(motorcycleOutput);
      expect(status).to.be.equal(200);
    });

    it('should return a error message Motorcycle not found and status 404', async function () {
      sinon.stub(Model, 'findById').resolves(null);

      const chaiHttpResponse = await chai.request(app).get('/motorcycles/6348513er5c397abcad040b2');

      const { body, status } = chaiHttpResponse;

      expect(body.message).to.be.deep.equal(idNotFoundMessage);
      expect(status).to.be.equal(404);
    });

    it('should return a error message Invalid mongo id and status 422', async function () {
      sinon.stub(Model, 'findById').resolves();

      const chaiHttpResponse = await chai.request(app).get('/motorcycles/6348513fc397abcad040b2');

      const { body, status } = chaiHttpResponse;

      expect(body.message).to.be.deep.equal(invalidIdMessage);
      expect(status).to.be.equal(422);
    });
  });

  describe('Test if is possible to update motorcycles info', function () {
    it('should return a motorcycle updated and status 200', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleOutput);

      const chaiHttpResponse = await chai.request(app)
        .put('/motorcycles/6348513sw4c397abcad040b2').send(motorcycleInput);

      const { body, status } = chaiHttpResponse;

      expect(body).to.be.deep.equal(motorcycleOutput);
      expect(status).to.be.equal(200);
    });

    it(
      'should return a error message Motorcycle not found and status 404 for update',
      async function () {
        sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

        const chaiHttpResponse = await chai.request(app)
          .put('/motorcycles/6348513f368397abcad040b2').send(motorcycleInput);

        const { body, status } = chaiHttpResponse;

        expect(body.message).to.be.deep.equal(idNotFoundMessage);
        expect(status).to.be.equal(404);
      },
    );

    it(
      'should return a error message Invalid mongo id and status 422 for update',
      async function () {
        sinon.stub(Model, 'findByIdAndUpdate').resolves();

        const chaiHttpResponse = await chai.request(app)
          .put('/motorcycles/63485134c397abcad040b2').send(motorcycleInput);

        const { body, status } = chaiHttpResponse;

        expect(body.message).to.be.deep.equal(invalidIdMessage);
        expect(status).to.be.equal(422);
      },
    );
  });
  
  describe('Test if is possible to delete a motorcycle', function () {
    it('should return { } and status 204', async function () {
      sinon.stub(Model, 'findByIdAndDelete').resolves({});

      const chaiHttpResponse = await chai.request(app)
        .delete('/motorcycles/6348513f34c397abcad040b2');

      const { body, status } = chaiHttpResponse;

      expect(body).to.be.deep.equal({});
      expect(status).to.be.equal(204);
    });

    it(
      'should return a error message Motorcycle not found and status 404 for delete',
      async function () {
        sinon.stub(Model, 'findByIdAndDelete').resolves(null);

        const chaiHttpResponse = await chai.request(app)
          .delete('/motorcycles/6348513f34c397abcad040b2');

        const { body, status } = chaiHttpResponse;

        expect(body.message).to.be.deep.equal(idNotFoundMessage);
        expect(status).to.be.equal(404);
      },
    );

    it(
      'should return a error message Invalid mongo id and status 422 for delete',
      async function () {
        sinon.stub(Model, 'findByIdAndDelete').resolves();

        const chaiHttpResponse = await chai.request(app)
          .delete('/motorcycles/6348513f3497abcad040b2');

        const { body, status } = chaiHttpResponse;

        expect(body.message).to.be.deep.equal(invalidIdMessage);
        expect(status).to.be.equal(422);
      },
    );
  });
});