import Character from '../classes/Character';
import Daemon from '../classes/Daemon';

test('Тест корректного name', () => {
  const input = new Character('aaa', 'Daemon');
  const result = {
    name: 'aaa',
    type: 'Daemon',
    health: 100,
    level: 1,
  };
  expect(input).toEqual(result);
});

test('Тест некорректного name', () => {
  const result = 'некорректное значение name';
  const input = () => new Character('1', 'Daemon');
  expect(input).toThrow(result);
});

test('Тест корректного type', () => {
  const input = new Character('aaa', 'Daemon');
  const result = {
    name: 'aaa',
    type: 'Daemon',
    health: 100,
    level: 1,
  };

  expect(input).toEqual(result);
});

test('Тест некорректного type', () => {
  const result = 'некорректное значение type';
  const input = () => new Character('aaaa', '1');
  expect(input).toThrow(result);
});

test('Проверка удачного повышения уровня', () => {
  const input = new Daemon('aaa', 'Daemon');
  input.health = 10;
  input.levelUp();
  const result = {
    name: 'aaa',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };

  expect(input).toEqual(result);
});

test('Проверка неудачного повышения уровня', () => {
  const input = new Daemon('aaa', 'Daemon');
  input.level = 0;

  const result = 'нельзя повысить левел умершего';

  expect(() => input.levelUp()).toThrow(result);
});

test('Проверка удачного нанесения damage', () => {
  const input = new Daemon('aaa', 'Daemon');
  input.damage(20);
  const result = {
    name: 'aaa',
    type: 'Daemon',
    health: 88,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(input).toEqual(result);
});

test('Проверка неудачного нанесения damage', () => {
  const input = new Daemon('aaa', 'Daemon');
  input.health = -1;
  const result = 'Герой мертв';

  expect(() => input.damage(20)).toThrow(result);
});
