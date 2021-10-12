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
  HttpRequests
} from './pages/';


const BackButton = routeProps => (routeProps.location.pathname !== "/")
  ? <div><NavLink className='btn btn-link' to="/">Home</NavLink></div>
  : null;

const App = () => {
  return (
    <Router>
      <div className="container py-3">
        <Switch>
          <Route path='/http-requests'>
            <HttpRequests />
          </Route>
          <Route path='/components'>
            <Components />
          </Route>
          <Route path='/classvsfunctions'>
            <ClassVsFunctions />
          </Route>
          <Route path='/localization'>
            <Localization />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Route render={routeProps => <BackButton {...routeProps} />} />
      </div>
    </Router>
  );
}

export default App;
