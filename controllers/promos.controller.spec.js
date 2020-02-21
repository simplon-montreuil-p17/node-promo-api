const { expect } = require('chai');
const sinon = require('sinon');
const uuid = require('uuid/v4');

const promoController = require('./promos.controller');
const db = require("../models");
const Promo = db.promo;
// const Apprenant = db.apprenant;

describe('Controllers :: promoController', () => {
  describe('#addPromo', () => {
    it('should return the right object', async () => {
      // Given
      const id = uuid();

      const data = {
        titre: 'CDA',
        iteration: 17
      };

      const createReturnObject = {
        id,
        ...data
      }

      const expectedObject = {
        id,
        ...data
      };

      const createStub = sinon
        .stub(Promo, 'create')
        .returns(createReturnObject);

      // When
      const createdObject = await promoController.addPromo(data);

      // Then
      expect(createStub.calledOnce).to.be.true;
      expect(createdObject).to.deep.equal(expectedObject);
    })
  })
});
