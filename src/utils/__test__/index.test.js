import {isValidEmail} from '../index';

describe('isValidEmail', () => {
  const allowedEmails = ['abbaxee@gmail.co', 'abbaxee@gmail.com'];
  const disallowedEmails = ['abbaxee', 'abbaxee@gmail', 'abbaxee@gmail.c'];

  allowedEmails.forEach((email) => {
    it(`${email} is allowed`, () => {
      expect(isValidEmail(email)).toBe(true);
    });
  });

  disallowedEmails.forEach((email) => {
    it(`${email} is not allowed`, () => {
      expect(isValidEmail(email)).toBe(false);
    });
  });
});
