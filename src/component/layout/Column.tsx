import React, { ReactNode } from "react";
import styled from "styled-components";

const Column = ({
  gap = 0,
  children,
}: {
  gap?: number;
  children: ReactNode;
}) => {
  return <Wrapper gap={gap}>{children}</Wrapper>;
};

export default Column;

const Wrapper = styled.div<{ gap: number }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => `${props.gap}px`};
  justify-content: center;
  width: 100%;
`;
