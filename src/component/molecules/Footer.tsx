import styled from "styled-components";
import LinkIcon from "../atom/LinkIcon";
import Row from "../layout/Row";
import RowBetween from "../layout/RowBetween";
import BuymeIcon from "../atom/Icons";

const Footer = () => {
  return (
    <Wrapper>
      <RowBetween>
        <div style={{ color: "#aaa" }}>&copy; 2023 Yuta Morofuji</div>
        <LinkIcon href="https://www.buymeacoffee.com/morofujix" target="_blank">
          <div
            style={{
              width: "100%",
              height: "100%",
              padding: "3px",
              borderRadius: "4px",
              display: "flex",
            }}
          >
            <span style={{ paddingRight: "8px", whiteSpace: "nowrap" }}>
              Buy me a coffee !
            </span>
            <BuymeIcon />
          </div>
        </LinkIcon>
      </RowBetween>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;

  padding: 80px 0px;
  @media screen and (max-width: 700px) {
    padding: 40px 0px;
  }

  font-size: 12px;
  text-align: center;
`;
