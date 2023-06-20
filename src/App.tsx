import Footer from "./component/molecules/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Boid from "./pages/Boid";
import RubiksCube from "./pages/RubiksCube";
import MA5 from "./pages/MA5";
import Keith from "./pages/Keith";
import Thermo from "./pages/Thermo";
import SFC from "./pages/SFC";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
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
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
