import { expect, test } from 'vitest';

test('test common matcher', () => {
  const name = 'ace';

  expect(name).toBe('ace');
  expect(2 + 2).toBe(4);
  expect(2 + 2).not.toBe(5);
});

test('test to be true or false', () => {
  expect(1).toBeTruthy();

  expect(0).toBeFalsy();
});

test('test number', () => {
  expect(4).toBeGreaterThan(3);

  expect(2).toBeLessThan(3);
});

test('test object', () => {
  expect({ name: 'ace' }).toEqual({ name: 'ace' }); // toBe 严格相等, toEqual 判断里面的值相等
});
