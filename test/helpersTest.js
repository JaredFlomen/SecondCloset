const chai = require('chai');
const assert = chai.assert;
const helpers = require('../server/helpers');

describe('Testing helpers', () => {
  it('Should return 36 when passing customer A and the stock input', () => {
    const fee = 20;
    const items = [
      {
        name: 'Fridge',
        length: '3',
        height: '6',
        width: '4',
        weight: '300',
        value: '1000',
      },
      {
        name: 'Sofa',
        length: '6',
        height: '4',
        width: '3',
        weight: '100',
        value: '500',
      },
    ];
    const output = 36;
    assert.equal(helpers.customerAPrice(fee, items), output);
  });

  it('Should return 184 when passing customer B and the stock input', () => {
    const fee = 20;
    const items = [
      {
        name: 'Fridge',
        length: '3',
        height: '6',
        width: '4',
        weight: '300',
        value: '1000',
      },
      {
        name: 'Sofa',
        length: '6',
        height: '4',
        width: '3',
        weight: '100',
        value: '500',
      },
    ];
    const output = 184;
    assert.equal(helpers.customerBPrice(fee, items), output);
  });

  it('Should return 115 when passing customer C and the stock input', () => {
    const fee = 20;
    const items = [
      {
        name: 'Fridge',
        length: '3',
        height: '6',
        width: '4',
        weight: '300',
        value: '1000',
      },
      {
        name: 'Sofa',
        length: '6',
        height: '4',
        width: '3',
        weight: '100',
        value: '500',
      },
    ];
    const output = 115;
    assert.equal(helpers.customerCPrice(fee, items), output);
  });

  it('Should return 328 when passing customer D and the stock input', () => {
    const fee = 20;
    const items = [
      {
        name: 'Fridge',
        length: '3',
        height: '6',
        width: '4',
        weight: '300',
        value: '1000',
      },
      {
        name: 'Sofa',
        length: '6',
        height: '4',
        width: '3',
        weight: '100',
        value: '500',
      },
    ];
    const output = 328;
    assert.equal(helpers.customerDVolume(fee, items), output);
  });
});
