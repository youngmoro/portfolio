import RowBetween from "../layout/RowBetween";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <RowBetween>
        <span
          style={{ width: "100%", paddingBottom: "100px", fontSize: "24px" }}
        >
          Yuta Morofuji
        </span>
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
  padding: 30px;
`;
