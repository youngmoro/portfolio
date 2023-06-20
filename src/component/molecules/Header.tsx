import RowBetween from "../layout/RowBetween";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <div style={{ fontSize: "24px", paddingBottom: "40px" }}>
        Yuta Morofuji
      </div>
      <RowBetween>
        <div />
        <div style={{ width: "100%", maxWidth: "300px" }}>
          <RowBetween>
            <span>Works</span>
            <span>About</span>
            <span>Contact</span>
          </RowBetween>
        </div>
      </RowBetween>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  max-width: 100%;
  padding: 40px 80px;
`;
