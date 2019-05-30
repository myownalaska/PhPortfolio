import { formatDate } from '@/utils/formatDate';

describe('utils', () => {
  test('formadDate', () => {
    const fakeDateString = '2017-06-22';
    const expedted = '22 June';
    expect(formatDate(fakeDateString)).toBe(expedted);
  });
});
