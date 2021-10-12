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
  ClassVsFunctions
} from './pages/';


const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path='/components'>
            <Components />
          </Route>
          <Route path='/classvsfunctions'>
            <ClassVsFunctions />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
