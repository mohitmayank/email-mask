const assert = require('assert');

const emailMask = require('./index');

assert.strictEqual(emailMask('sample.email@domain.com'), 's**********l@domain.com');
assert.strictEqual(emailMask('sample.email@domain.com', '#'), 's##########l@domain.com');
