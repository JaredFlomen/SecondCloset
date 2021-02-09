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
});
