import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { LinkText } from "./LinkText";

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
        <img src={`/tile/${name}-tile.jpg`} />
      </ImgBox>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <LinkText>{title}</LinkText>
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
  background-color: #111;

  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }
`;

const Year = styled.span`
  color: white;
  margin: 0px 4px;
  font-size: 12px;
`;
