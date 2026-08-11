import React from "react";
import { styled } from "styled-components";

const WorkImg = ({
  name,
  format = "png",
  priority = false,
}: {
  name: string;
  format?: string;
  priority?: boolean;
}) => {
  const source = `/work/${name}.${format}`;

  return (
    <Picture>
      {format !== "gif" && (
        <source srcSet={`/work/${name}.webp`} type="image/webp" />
      )}
      <Wrapper
        src={source}
        alt={name}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    </Picture>
  );
};

export default WorkImg;

const Picture = styled.picture`
  display: block;
  width: 100%;
`;

const Wrapper = styled.img`
  position: relative;
  width: 100%;
  height: auto;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;
