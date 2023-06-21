import React from "react";
import { styled } from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <div>
        <span>諸藤 勇太</span>
        <span>Yuta Morofuji</span>
        <br />
        <span style={{ fontSize: "14px", paddingBottom: "4px" }}>
          1999年生まれ。慶應義塾大学大学院 政策・メディア研究科
          修士課程在籍。プログラミングのスキルを活かし、ビッグデータの可視化やCG作品、インスタレーションの制作などを行う。
        </span>
        <span style={{ fontSize: "14px" }}>
          Born in 1999. Master's student at the Graduate School of Media and
          Governance, Keio University. Utilizing his programming skills, he
          creates big data visualizations, CG works, and installations.
        </span>
        <br />
      </div>
      <Title>Internship</Title>
      <a href="https://nsketch.com/">
        <ItemText>N sketch 2022.3 -</ItemText>
      </a>
      <a href="https://spnc.jp/">
        <ItemText>CANOPUS 2021.1 - 2021.9</ItemText>
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
        <ItemText>openFrameworks, Processing, P5.js</ItemText>
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
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  max-width: 100%;
  padding: 0px 80px;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const MiniTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  padding: 4px;
`;

const ItemText = styled.span`
  font-size: 16px;
  padding: 2px 24px;
`;

const Paragraph = styled.div`
  margin: 2px;
`;