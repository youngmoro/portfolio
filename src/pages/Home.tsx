import LinkIcon from "../component/atom/LinkIcon";
import Footer from "../component/molecules/Footer";
import Header from "../component/molecules/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <Contents>
        <Link to={"./Boid"}>
          <div
            style={{
              width: "300px",
              height: "300px",
              backgroundColor: "white",
            }}
          />
        </Link>
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
    </>
  );
}

export default Home;

const Contents = styled.div`
  max-width: 100%;
  padding: 0px 30px;
  display: flex;
  gap: 100px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
