import React from "react";

const ImgFrame = ({ source }) => {
  return (
    <img src={source} className="banner--img" />
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

class Banner extends React.Component {
  constructor() {
    super();
    this.state = {
      imgloaded: false,
      figDisplay: 'none'
    }
    this.lazyLoadImg = this.lazyLoadImg.bind(this);
  }


  lazyLoadImg (url) {
    const img = new Image();
    img.src = `${url}`;
    img.onload = () => {
      this.setState(prevState => {
        return {
          imgloaded: true,
          figDisplay: 'block'
        }
      })
    }

    if (this.state.imgloaded && this.state.figDisplay === 'block') {
      return (
        <ImgFrame source={url} />
      )
    }

    return;
  }

  componentDidMount() {
    this.setState(prevState => {
      return {
        imgloaded: false,
        figDisplay: 'none'
      }
    })
  }

  render() {
    let ArtistDetails = this.props.ArtistDetails
    if (this.props.imgs[1]) {
      let imgs = this.props.imgs
      return (
        <div className="banner">
          <figure className="banner--fig" id="banner--fig" style={{
              display: this.state.figDisplay
            }}>
            {this.lazyLoadImg(`${imgs[1].url}`)}
          </figure>
          <Details details={ArtistDetails} />
        </div>
      );
    }
    return (
      <div className="banner">
        <Details details={ArtistDetails} />
      </div>
    )
  }
}

export default Banner;
