// install react-router-dom
import {
  BrowserRouter as Routes,
  Routes as Router,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
const TheRoutes = () => {
  return (
    <Routes>
      <Router>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/promotion-products" />
      </Router>
    </Routes>
  );
};
export default TheRoutes;
