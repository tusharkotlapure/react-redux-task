export const inValidLogin = {
  'path': 'invalid-login',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/invalid-login').default);
    }, 'invalid-login');
  }
};
