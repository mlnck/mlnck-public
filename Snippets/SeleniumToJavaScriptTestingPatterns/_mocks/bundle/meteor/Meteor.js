import reload from './reload';

const Meteor = {
  isServer: true,
  loginWithPassword: jest.fn(),
  loginWithFacebook: jest.fn(),
  methods: jest.fn(),
  call: jest.fn(),
  publish: jest.fn(),
  subscribe: jest.fn(),
  user: jest.fn(),
  userId: jest.fn().mockReturnValue('f00bar'),
  startup: jest.fn(),
  bindEnvironment: jest.fn(),
  wrapAsync: jest.fn(),
  _reload:reload,
  Error: jest.fn(Error),
};

module.exports = { Meteor };
