import React from "react";

const Music = () => {
  return (
    <div
      className="pic-frame"
      style={{
        width: "50vh",
        overflow: "hidden",
        display: "flex",
      }}
    >
      <img
        style={{
          maxWidth: "inherit",
          maxHeight: "inherit",
          height: "inherit",
          width: "inherit",
          objectFit: "cover",
        }}
        src="https://s3.ap-northeast-1.amazonaws.com/www.gonuma.com/images/jimmy-page-robert-plant-freddie-mercury.jpg"
      />
    </div>
  );
};

export default Music;
