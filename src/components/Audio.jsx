import React from "react";

const Audio = ({ url, id }) => {
  return (
    <div className="audio">
      <audio id={id} controls="controls" preload="auto">
        <source src={url} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Audio;
