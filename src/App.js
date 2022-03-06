import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./compo/Contact";
import Dummy from "./compo/Dummy";
import Home from "./compo/Home";
import Participants from "./compo/Participants";
import Register from "./compo/Register";
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Register" component={Register} exact />
        <Route path="/Participants" component={Participants} exact />
        <Route path="/Dummy" component={Dummy} exact />
        <Route path="/Contact" component={Contact} exact />
      </Switch>
    </HashRouter>
  );
}

export default App;
