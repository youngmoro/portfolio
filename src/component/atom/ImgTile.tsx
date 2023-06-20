import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const ImgTile = ({ name }: { name: string }) => {
  return (
    <Link to={`./${name}`}>
      <Wrapper>
        <img src={`/${name}.svg`} />
      </Wrapper>
    </Link>
  );
};

export default ImgTile;

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
`;
