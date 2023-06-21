import React, { Children, ReactNode } from "react";
import { styled } from "styled-components";

const WorkTitle = ({ children }: { children: ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default WorkTitle;

const Wrapper = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
