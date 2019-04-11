import React from "react";

class TrackCard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let track = this.props.track;
    console.log(track);
    return (
      <div className="trackcard">
        <div className="trackcard--playpause">
          <svg className="trackcard--play" id="app__name--svg">
            <use xlinkHref="./img/sprite.svg#icon-play2" />
          </svg>
        </div>
        <figure className="trackcard--fig">
          <img className="trackcard--img" src={track.album.images[0].url} />
        </figure>
        <div className="trackcard--details">
          <div className="trackcard--text">
            <p>{track.album.name}</p>
          </div>
          <div className="trackcard--text">
            <p>{track.album.album_type}</p>
          </div>
          <div className="trackcard--text">
            <p>{track.album.release_date}</p>
          </div>
          <div className="trackcard--artists">
            {track.album.artists.map(artist => {
              return (
                <div key={artist.id} className="trackcard--artist-parent">
                  <a
                    className="trackcard--artist"
                    href={artist.external_urls.spotify}
                    target="_blank"
                  >
                    {artist.name}
                  </a>
                </div>
              );
            })}
          </div>
          <div className="trackcard--btn">
            <a
              className="link"
              href={track.album.external_urls.spotify}
              target="_blank"
            >
              play on Spotify
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default TrackCard;
