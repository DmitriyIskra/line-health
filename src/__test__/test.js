import healthStatus, { personageMag, personageWarrior, personageDwarf } from '../index';

test('check health of personage', () => {
  const result = healthStatus(personageMag);

  expect(result).toBe('healthy');
});

test('check health of personage', () => {
  const result = healthStatus(personageWarrior);

  expect(result).toBe('wounded');
});

test('check health of personage', () => {
  const result = healthStatus(personageDwarf);

  expect(result).toBe('critical');
});
