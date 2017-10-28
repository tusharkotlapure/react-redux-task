/* Route for 404 */
export const PageNotFound = {
  'path': '*',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../components/404/page-not-found').default);
    }, 'page-not-found');
  }
};
