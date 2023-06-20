import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const ImgTile = ({
  name,
  title,
  year,
}: {
  name: string;
  title: string;
  year: string;
}) => {
  return (
    <Link to={`./${name}`}>
      <ImgBox>
        <img src={`/${name}-tile.jpg`} />
      </ImgBox>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Text>{title}</Text>
        <Year>{year}</Year>
      </div>
    </Link>
  );
};

export default ImgTile;

const ImgBox = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 12px;

  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }
`;

const Text = styled.div`
  color: white;
  margin: 0px 4px;
  font-size: 14px;
  box-sizing: border-box;
  border-bottom: 1px solid transparent;
  width: fit-content;

  &:hover {
    border-bottom: 1px solid white;
  }
`;

const Year = styled.span`
  color: white;
  margin: 0px 4px;
  font-size: 12px;
`;
