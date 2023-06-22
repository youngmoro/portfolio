import React, { ReactNode } from "react";
import styled from "styled-components";

const RowBetween = ({
  children,
  wrap = false,
}: {
  children: ReactNode;
  wrap?: boolean;
}) => {
  return <Wrapper wrap={wrap}>{children}</Wrapper>;
};

export default RowBetween;

const Wrapper = styled.div<{ wrap: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 700px) {
    flex-direction: ${(props) => (props.wrap ? "column" : "row")};
    gap: 16px;
  }
`;
