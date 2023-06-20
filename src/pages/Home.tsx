import LinkIcon from "../component/atom/LinkIcon";
import Footer from "../component/molecules/Footer";
import Header from "../component/molecules/Header";
import styled from "styled-components";
import ImgTile from "../component/atom/ImgTile";

function Home() {
  return (
    <>
      <Header />
      <Contents>
        <ImgTile name="Keith" />
        <ImgTile name="MA5" />
        <ImgTile name="Boid" />
        <ImgTile name="SFC" />
        <ImgTile name="Thermo" />
        <ImgTile name="RubiksCube" />
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
