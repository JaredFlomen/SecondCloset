const request = require('supertest');
const app = require('../server/index');

describe('Sample test', () => {
  it('Should test that true === true', () => {
    expect(true).toBe(true);
  });
});

describe('Post Endpoints', () => {
  it('should create a new post', () => {
    const res = request(app)
      .post('/api')
      .send({
        fee: 20,
        customer: 'A',
        items: [
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
        ],
      });
    // expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(36);
  });
});
