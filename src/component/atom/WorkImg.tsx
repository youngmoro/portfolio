import React from "react";
import { styled } from "styled-components";

const WorkImg = ({
  name,
  format = "png",
}: {
  name: string;
  format?: string;
}) => {
  return <Wrapper src={`work/${name}.${format}`}></Wrapper>;
};

export default WorkImg;

const Wrapper = styled.img`
  position: relative;
  width: 100%;
  height: auto;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;
