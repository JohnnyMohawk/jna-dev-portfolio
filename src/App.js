import { BrowserRouter, Route, Routes } from "react-router-dom";

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
import WeirdAI from "./pages/WeirdAI";
import Mint from "./pages/Mint";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/my-art" element={<Art />} />
        <Route path="/my-plates" element={<Food />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/contact-me" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/token-gated" element={<Tokens />} />
        <Route path="/weird-ai" element={<WeirdAI />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
