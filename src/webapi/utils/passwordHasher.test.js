/* eslint-disable no-undef */
const assert = require('assert');
const passwordHasher = require('./passwordHasher');

describe('passwordHasher', () => {
  it('should hash password', async () => {
    const plainText = '123123123';

    const resultHash = await passwordHasher.hashPassword(plainText);
    const hashesMatch = await passwordHasher.comparePassword(plainText, resultHash);

    assert.equal(hashesMatch, true);
  });

  it('should validate password hashes', async () => {
    const plainText = '123123123';

    const hashedPass = await passwordHasher.hashPassword(plainText);
    const isMatch = await passwordHasher.comparePassword(plainText, hashedPass);

    assert.equal(isMatch, true);
  });
});
