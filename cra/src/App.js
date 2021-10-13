import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import './styles/main.scss';
import {
  Home,
  Components,
  ClassVsFunctions,
  Localization,
  HttpRequests,
  UseRef,
  UseReducer,
  Observables,
  Redux
} from './pages/';

const routes = [
  {
    path: '/http-requests',
    exact: true,
    component: <HttpRequests />
  },
  {
    path: '/components',
    exact: true,
    component: <Components />
  },
  {
    path: '/classvsfunctions',
    exact: true,
    component: <ClassVsFunctions />
  },
  {
    path: '/localization',
    exact: true,
    component: <Localization />
  },
  {
    path: '/use-ref',
    exact: true,
    component: <UseRef />
  },
  {
    path: '/use-reducer',
    exact: true,
    component: <UseReducer />
  },
  {
    path: '/observables',
    exact: true,
    component: <Observables />
  },
  {
    path: '/redux',
    exact: true,
    component: <Redux />
  },
  {
    path: '/',
    exact: false,
    component: <Home />
  }
]

const Routes = () => <Switch>
  {
    routes.map((route, index) =>
      <Route path={route.path} exact={route.exact} key={index}>
        {route.component}
      </Route>
    )
  }
</Switch>

const BackButton = routeProps => (routeProps.location.pathname !== "/")
  ? <div className="pt-3"><NavLink className='btn btn-link' to="/">Home</NavLink></div>
  : null;

const App = () => {
  return (
    <Router>
      <div className="container py-3">
        <Routes />
        <Route render={routeProps => <BackButton {...routeProps} />} />
      </div>
    </Router>
  );
}

export default App;
