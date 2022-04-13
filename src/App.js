import { BrowserRouter, Route, Switch } from "react-router-dom";
import RouteChangeTracker from './components/RouteChangeTracker.js'

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

import ReactGA from 'react-ga'
 
const GA_TRACKING_CODE = process.env.REACT_APP_GA_TRACKING_CODE
 
ReactGA.initialize(GA_TRACKING_CODE)

const App = () => {
  return (
    <BrowserRouter>
      <RouteChangeTracker />
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
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

// export default withRouter(App);
export default App;
