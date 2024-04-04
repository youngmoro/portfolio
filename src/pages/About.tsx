import React from "react";
import { styled } from "styled-components";
import Row from "../component/layout/Row";
import BuymeIcon, { GithubIcon } from "../component/atom/Icons";
import LinkIcon from "../component/atom/LinkIcon";
import { LinkText } from "../component/atom/LinkText";
import RowBetween from "../component/layout/RowBetween";

const About = () => {
  return (
    <>
      <div>
        <RowBetween wrap={1}>
          <div style={{ width: "100%" }}>
            <span>諸藤 勇太</span>
            <span>Yuta Morofuji</span>
          </div>
          <Row gap={16}>
            <LinkIcon href="https://github.com/youngmoro" target="_blank">
              <GithubIcon />
            </LinkIcon>
            <LinkIcon
              href="https://www.buymeacoffee.com/morofujix"
              target="_blank"
            >
              <BuymeIcon size={24} />
            </LinkIcon>
            <a href="mailto:info@yutamorofuji.com">
              <LinkText>info[at]yutamorofuji[dot]com</LinkText>
            </a>
          </Row>
        </RowBetween>
        <br />
        <span style={{ fontSize: "14px", paddingBottom: "8px" }}>
          1999年生まれ。慶應義塾大学大学院 政策・メディア研究科
          修士課程修了。プログラミングのスキルを活かし、ビッグデータの可視化やCG作品、インスタレーションの制作などを行う。
        </span>
        <span style={{ fontSize: "14px" }}>
          Born in 1999. Completed the master's program at the Graduate School of
          Media and Governance, Keio University. Utilizing programming skills,
          he creates big data visualizations, CG works, and installations.
        </span>
        <br />
      </div>
      <Title>Job</Title>
      <Row gap={38}>
        <ItemText>?????</ItemText>
        <ItemText>2024.4 -</ItemText>
      </Row>
      <br />
      <Title>Part-time Job</Title>
      <a href="https://nsketch.com/">
        <Row gap={12}>
          <ItemText>
            <LinkIcon>N sketch</LinkIcon>
          </ItemText>
          <ItemText>2022.3 - 2024.3</ItemText>
        </Row>
      </a>
      <a href="https://spnc.jp/">
        <Row>
          <ItemText>
            <LinkIcon>CANOPUS</LinkIcon>
          </ItemText>
          <ItemText>2021.1 - 2021.9</ItemText>
        </Row>
      </a>
      <br />
      <Title>Skills</Title>
      <Paragraph>
        <MiniTitle>Language</MiniTitle>
        <ItemText>Japanese (Native)</ItemText>
        <ItemText>English</ItemText>
      </Paragraph>
      <Paragraph>
        <MiniTitle>Development</MiniTitle>
        <ItemText>openFrameworks, Processing, p5.js, Three.js</ItemText>
        <ItemText>C++, Python, Java</ItemText>
        <ItemText>
          HTML, CSS, JavaScript, TypeScript, React.js, Next.js
        </ItemText>
        <ItemText>Ableton Live</ItemText>
      </Paragraph>
      <Paragraph>
        <MiniTitle>Others</MiniTitle>
        <ItemText>Shogi (Shodan)</ItemText>
      </Paragraph>
    </>
  );
};

export default About;

const Title = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const MiniTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  padding: 8px;
`;

const ItemText = styled.span`
  font-size: 16px;
  margin: 2px 24px;
`;

const Paragraph = styled.div`
  margin: 2px;
`;
