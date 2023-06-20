import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const ImgTile = ({ name }: { name: string }) => {
  return (
    <Link to={`./${name}`}>
      <ImgBox>
        <img src={`/${name}-tile.jpg`} />
      </ImgBox>
    </Link>
  );
};

export default ImgTile;

const ImgBox = styled.div`
  width: 300px;
  height: 300px;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }
`;
