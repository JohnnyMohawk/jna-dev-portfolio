import { BrowserRouter, Route, Switch } from "react-router-dom";

// COMPONENTS
import Homepage from "./components/Homepage";
import Error from "./pages/Error";

// PAGES
import Projects from "./pages/Projects";
import Menu from "./components/Menu";
import Contacts from "./pages/Contacts";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact-me">
          <Contacts></Contacts>
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
