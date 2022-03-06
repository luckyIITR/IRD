import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./compo/Home";
import Register from "./compo/Register";
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Register" component={Register} exact />
      </Switch>
    </HashRouter>
  );
}

export default App;
