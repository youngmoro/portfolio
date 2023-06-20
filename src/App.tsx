import Footer from "./component/molecules/Footer";
import Header from "./component/molecules/Header";
import styled from "styled-components";

function App() {
  return (
    <>
      <Header />
      <Contents>
        <div
          style={{ width: "300px", height: "300px", backgroundColor: "white" }}
        />
        <div
          style={{ width: "300px", height: "300px", backgroundColor: "white" }}
        />
        <div
          style={{ width: "300px", height: "300px", backgroundColor: "white" }}
        />
        <div
          style={{ width: "300px", height: "300px", backgroundColor: "white" }}
        />
        <div
          style={{ width: "300px", height: "300px", backgroundColor: "white" }}
        />
        <div
          style={{ width: "300px", height: "300px", backgroundColor: "white" }}
        />
      </Contents>
      <Footer />
    </>
  );
}

export default App;

const Contents = styled.div`
  max-width: 100%;
  padding: 0px 30px;
  display: flex;
  gap: 100px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
