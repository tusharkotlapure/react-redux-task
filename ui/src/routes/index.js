//Route files
import { PageNotFound } from './404/page-not-found';

//Components
import App from '../components/App.jsx';

const routes = {

  /* root route and its component */
  path: '/',
  component: App,

  /* all child routes goes here */
  childRoutes: [
    PageNotFound
  ]
};

export default routes;
