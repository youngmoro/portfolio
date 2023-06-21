import Footer from "./component/molecules/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Boid from "./pages/Boid";
import RubiksCube from "./pages/RubiksCube";
import MA5 from "./pages/MA5";
import Keith from "./pages/Keith";
import Thermo from "./pages/Thermo";
import SFC from "./pages/SFC";
import About from "./pages/About";
import Header from "./component/molecules/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/About/`} element={<About />} />
        <Route path={`/Boid/`} element={<Boid />} />
        <Route path={`/Keith/`} element={<Keith />} />
        <Route path={`/MA5/`} element={<MA5 />} />
        <Route path={`/RubiksCube/`} element={<RubiksCube />} />
        <Route path={`/Thermo/`} element={<Thermo />} />
        <Route path={`/SFC/`} element={<SFC />} />
        <Route
          path="*"
          element={<span style={{ fontSize: "48px" }}>404 Not Found</span>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
