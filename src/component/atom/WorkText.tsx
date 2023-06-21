import React, { Children, ReactNode } from "react";
import { styled } from "styled-components";

const WorkText = ({ children }: { children: ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default WorkText;

const Wrapper = styled.div`
  font-size: 16px;
`;
