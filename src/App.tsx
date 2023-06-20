import LinkIcon from "./component/atom/LinkIcon";
import Footer from "./component/molecules/Footer";
import Header from "./component/molecules/Header";
import styled from "styled-components";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Boid from "./pages/Boid";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/Boid/`} element={<Boid />} />
        <Route
          path="*"
          element={<span style={{ fontSize: "48px" }}>404 Not Found</span>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
