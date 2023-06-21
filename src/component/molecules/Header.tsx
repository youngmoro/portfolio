import { Link } from "react-router-dom";
import RowBetween from "../layout/RowBetween";
import styled from "styled-components";
import { LinkText } from "../atom/LinkText";

const Header = () => {
  return (
    <Wrapper>
      <div style={{ fontSize: "24px", paddingBottom: "30px" }}>
        Yuta Morofuji.com
      </div>
      <RowBetween>
        <div />
        <div style={{ width: "100%", maxWidth: "120px" }}>
          <RowBetween>
            <Link to={`/`}>
              <LinkText>Works</LinkText>
            </Link>
            <Link to={`/About`}>
              <LinkText>About</LinkText>
            </Link>
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

  @media screen and (max-width: 700px) {
    padding: 40px 20px;
  }
`;
