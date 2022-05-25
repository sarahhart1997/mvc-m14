const {format_date} = require('../utils/helpers');

test('format_date() returns a date string', () => {
  const date = new Date('2022-05-25 16:12:03');

  expect(format_date(date)).toBe('5/25/2022');
});