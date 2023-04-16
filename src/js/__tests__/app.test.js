import rateParticpant from '../app.js';

test('Test ratePartic',() => {
  const result =[
    {
      name: 'маг',
      health: 100
    }, {
      name: 'лучник',
      health: 80
    }, {
      name: 'мечник',
      health: 10
    },
  ];
  const array = [
    {
      name: 'мечник',
      health: 10
    }, {
      name: 'маг',
      health: 100
    }, {
      name: 'лучник',
      health: 80
    },
  ];
  expect(rateParticpant(array)).toEqual(result);
  }
);