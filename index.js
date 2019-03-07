module.exports = function emailMask(email, mask) {
  mask = mask || '*';
  return email.replace(/^(.)(.*)(.@.*)$/, function(_, a, b, c) {
    return a + b.replace(/./g, mask) + c;
  });
};
