// mocks for methods not included in /node_modules/jest-meteor-stubs/lib/meteor/
const reload = {
  onMigrate : function (name, callback) {
    if (!callback) {
      callback = name;
      name = undefined;
    }
    jest.fn();
  },
  migrationData : function (name) {
    jest.fn();
  },
  reload : function() { jest.fn(); }
};

module.exports = reload
