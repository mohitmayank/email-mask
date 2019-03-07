const assert = require('assert');

const maskEmail = require('./index');

assert.strictEqual(maskEmail('sample.email@domain.com'), 's**********l@domain.com');
assert.strictEqual(maskEmail('sample.email@domain.com', '#'), 's##########l@domain.com');
