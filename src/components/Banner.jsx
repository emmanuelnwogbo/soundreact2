import React from "react";

const ImgFrame = ({ source }) => {
  return (
    <figure className="banner--fig">
      <img src={source} className="banner--img" />
    </figure>
  );
};

const Details = ({ details }) => {
  let genreKeys = 0;
  let followers = details.followers.total;
  let followersFormated = String(followers).replace(/(.)(?=(\d{3})+$)/g, "$1,");
  return (
    <div className="banner--details">
      <div className="banner--details-section banner--details-name">
        <div>
          <p>{details.name}</p>
        </div>
      </div>
      <div className="banner--details-section">
        <div>
          <p>Followers:</p>
        </div>
        <div>
          <p>{followersFormated}</p>
        </div>
      </div>
      <div className="banner--details-section">
        <div>
          <p>Genres:</p>
        </div>
        <div>
          {details.genres.map(genre => {
            return (
              <p className="banner--details-genres" key={(genreKeys += 1)}>
                {genre}
              </p>
            );
          })}
        </div>
      </div>
      <div className="banner--details-section banner--details-btn">
        <span>
          <a
            className="link"
            href={details.external_urls.spotify}
            target="_blank"
          >
            view Spotify page
          </a>
        </span>
      </div>
    </div>
  );
};

const Banner = ({ imgs, ArtistDetails }) => {
  return (
    <div className="banner">
      <ImgFrame source={`${imgs[0].url}`} />
      <Details details={ArtistDetails} />
    </div>
  );
};

export default Banner;
