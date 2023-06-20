import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const ImgTile = ({ name, title }: { name: string; title: string }) => {
  return (
    <Link to={`./${name}`}>
      <ImgBox>
        <img src={`/${name}-tile.jpg`} />
      </ImgBox>
      <Text>{title}</Text>
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

const Text = styled.span`
  color: white;
  margin: 0px 4px;
  font-size: 12px;
  box-sizing: border-box;

  &:hover {
    border-bottom: 1px solid white;
  }
`;
