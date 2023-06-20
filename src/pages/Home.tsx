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
        <ImgTile
          name="Keith"
          title="Diversity (For Alan and Keith) (2021-2022)"
        />
        <ImgTile name="MA5" title="NIKELAB RADIO*_installation_at MA5 (2021)" />
        <ImgTile name="Boid" title="群れを生むルール (2021)" />
        <ImgTile name="SFC" title="SFC 30th Anniversry Website (2021)" />
        <ImgTile name="Thermo" title="Thremo Data Visualization (2021)" />
        <ImgTile name="RubiksCube" title={`Rubik's cube (2020)`} />
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
