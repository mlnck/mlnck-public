// mocks for methods not included in /node_modules/jest-meteor-stubs/lib/meteor/
const session = {
  __: function(value) { return value },
};

const Session = {
  __: function(value) { return value },
  get: () => true
};

module.exports = { session, Session }
