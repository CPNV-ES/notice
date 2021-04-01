import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';

// Library styles
import 'bootstrap/dist/css/bootstrap.min.css';

// Application styles
import './App.css';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" component={Login} exact/>
        </Switch>
    </Router>
  );
}

export default App;
