import styled from "styled-components";
import ImgTile from "../component/atom/ImgTile";

function Home() {
  return (
    <Contents>
      <ImgTile
        name="Keith"
        title="Diversity (For Alan and Keith)"
        year="2021-2022"
      />
      <ImgTile
        name="MA5"
        title="NIKELAB RADIO*_installation_at MA5"
        year="2021"
      />
      <ImgTile name="Boid" title="群れを生むルール" year="2021" />
      <ImgTile name="SFC" title="SFC 30th Anniversry Website" year="2021" />
      <ImgTile name="Thermo" title="Thremo Data Visualization" year="2021" />
      <ImgTile name="RubiksCube" title={`Rubik's cube`} year="2021" />
    </Contents>
  );
}

export default Home;

const Contents = styled.div`
  max-width: 100%;
  padding: 0px 28px;
  display: flex;
  gap: 80px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
