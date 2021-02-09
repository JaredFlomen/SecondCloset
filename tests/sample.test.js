const request = require('supertest');
const express = require('express');
const app = express();

describe('Sample test', () => {
  it('Should test that true === true', () => {
    expect(true).toBe(true);
  });
});

describe('Post Endpoints', () => {
  it('Post /api', () => {
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
      })
      .expect('Content-Type', /json/);
  });
});
