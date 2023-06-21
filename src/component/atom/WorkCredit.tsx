import React, { Children, ReactNode } from "react";
import { styled } from "styled-components";

const WorkCredit = ({ children }: { children: ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default WorkCredit;

const Wrapper = styled.div`
  font-size: 14px;
`;
