import React from "react";

const WorkVimeo = ({ src }: { src: string }) => {
  return (
    <div style={{ padding: "62.5% 0 0 0", position: "relative" }}>
      <iframe
        src={`${src}`}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="2020to2021"
      ></iframe>
    </div>
  );
};

export default WorkVimeo;
