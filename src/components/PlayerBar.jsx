import React from "react";

class PlayerBar extends React.Component {
  render() {
    return (
      <div className="playerbar">
        <div className="playerbar__playpausenextprev--controls">
          <div className="playerbar__playpausenextprev--icons">
            <svg className="playerbar__playpausenextprev--svg">
              <use xlinkHref="./img/sprite.svg#icon-previous2" />
            </svg>
          </div>
          <div className="playerbar__playpausenextprev--icons">
            <svg className="playerbar__playpausenextprev--svg">
              <use xlinkHref="./img/sprite.svg#icon-play3" />
            </svg>
          </div>
          <div className="playerbar__playpausenextprev--icons">
            <svg className="playerbar__playpausenextprev--svg">
              <use xlinkHref="./img/sprite.svg#icon-next2" />
            </svg>
          </div>
          <div className="playerbar__time">
            <p>0:00</p>
          </div>
          <div className="playerbar--progress" />
          <div className="playerbar__time">
            <p>0:00</p>
          </div>
          <div className="playerbar__playpausenextprev--icons-volume">
            <div className="playerbar--volumecontroller-parent">
              <div className="playerbar--volumecontroller">
                <div className="playerbar--volumeprogress" />
              </div>
            </div>
            <svg className="playerbar__playpausenextprev--svg">
              <use xlinkHref="./img/sprite.svg#icon-volume-medium" />
            </svg>
          </div>
          <div className="playerbar--details">
            <figure className="playerbar--figure">
              <img
                className="playerbar--img"
                src="https://res.cloudinary.com/dxlhzerlq/image/upload/c_scale,h_50,q_93/v1545772572/images_zjglmv.jpg"
              />
            </figure>
            <div className="playerbar--details-names">
              <span>
                <p>Artist Name</p>
              </span>
              <span>
                <p>Current Song That's Playing</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerBar;
