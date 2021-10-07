import { Navigation } from "./components/common/";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PageRenderer from "./PageRenderer";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const user = {
    firstName: "James",
    lastName: "King",
  };
  return (
    <Router>
      <div className="App">
        <Navigation user={user} />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home" />} />

          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
