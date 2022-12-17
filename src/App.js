import { BrowserRouter, Route, Switch } from "react-router-dom";

// COMPONENTS
import Homepage from "./components/Homepage";
import Error from "./pages/Error";

// PAGES
import Projects from "./pages/Projects";
import Menu from "./components/Menu";
import Contacts from "./pages/Contacts";
import Art from "./pages/Art";
import About from "./pages/About";
import Food from "./pages/Food";
import Videos from "./pages/Videos";
import Tokens from "./pages/Tokens";

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
        <Route path="/my-art">
          <Art />
        </Route>
        <Route path="/my-plates">
          <Food />
        </Route>
        <Route path="/videos">
          <Videos />
        </Route>
        <Route path="/about-me">
          <About />
        </Route>
        <Route path="/contact-me">
          <Contacts />
        </Route>
        <Route path="/token-gated">
          <Tokens />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
