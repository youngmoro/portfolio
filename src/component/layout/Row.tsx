import React, { ReactNode } from "react";
import styled from "styled-components";

const Row = ({ gap = 0, children }: { gap?: number; children: ReactNode }) => {
  return <Wrapper gap={gap}>{children}</Wrapper>;
};

export default Row;

const Wrapper = styled.div<{ gap: number }>`
  display: flex;
  gap: ${(props) => `${props.gap}px`};
  align-items: center;
  width: 100%;
  flex-shrink: 2;
`;
