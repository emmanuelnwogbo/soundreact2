import React from "react";

const ImgFrame = ({ source }) => {
  return (
    <figure className="banner--fig">
      <img src={source} className="banner--img" />
    </figure>
  );
};

const Banner = ({ imgs }) => {
  return (
    <div className="banner">
      <ImgFrame source={`${imgs[0].url}`} />
    </div>
  );
};

export default Banner;
