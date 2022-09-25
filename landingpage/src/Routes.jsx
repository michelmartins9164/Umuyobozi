// install react-router-dom
import {
  BrowserRouter as Routes,
  Routes as Router,
  Route,
} from "react-router-dom";
import { About } from "./pages/about";
import { Catalog } from "./pages/catalog";
import Home from "./pages/Home";
const TheRoutes = () => {
  return (
    <Routes>
      <Router>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/produtos-em-oferta" />
        <Route exact path="/catalogo" element={<Catalog />} />
        <Route exact path="/sobre" element={<About />} />
      </Router>
    </Routes>
  );
};
export default TheRoutes;
