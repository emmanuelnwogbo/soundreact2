import React from "react";

import Audio from "./Audio";
import Global from "../global";

class TrackCard extends React.Component {
  constructor() {
    super();
    this.state = {
      playing: false,
      loading: false,
      track: false
    };
    this.playPauseTrack = this.playPauseTrack.bind(this);
    this.playPauseBtn = this.playPauseBtn.bind(this);
  }

  playPauseTrack(e) {
    window.addEventListener("keypress", Global.pausePlayMusic, false);
    if (this.state.playing) {
      return this.setState(
        prevState => {
          return {
            playing: false
          };
        },
        () => {
          this.state.track.pause();
          Global.paused = true;
        }
      );
    }

    if (!this.state.playing) {
      this.setState(
        prevState => {
          return {
            loading: true,
            playing: true
          };
        },
        () => {
          if (Global.song && !Global.paused) {
            Global.song.load();
            Global.setCurrentTrackComponentPlayingStateToFalse();
          }
          Global.song = this.state.track;
          Global.paused = false;
          Global.currentTrackComponent = this;
          Global.song.play().then(() => {
            this.setState(prevState => {
              return {
                loading: false
              };
            });
            Global.song.onended = () => {
              this.setState(prevState => {
                return {
                  playing: false
                };
              });
            };
            Global.song.onwaiting = () => {
              this.setState(prevState => {
                return {
                  loading: true
                };
              });
            };
            Global.song.onplaying = () => {
              this.setState(prevState => {
                return {
                  loading: false
                };
              });
            };
            return this.setState(prevState => {
              return {
                playing: true
              };
            });
          });
        }
      );
    }
  }

  playPauseBtn() {
    if (this.state.playing && !this.state.loading) {
      return (
        <svg className="trackcard--play" onClick={this.playPauseTrack}>
          <use xlinkHref="./img/sprite.svg#icon-pause" />
        </svg>
      );
    } else if (this.state.playing && this.state.loading) {
      return (
        <svg
          className="trackcard--play trackcard--loading"
          onClick={this.playPauseTrack}
        >
          <use xlinkHref="./img/sprite.svg#icon-spinner" />
        </svg>
      );
    } else {
      return (
        <svg className="trackcard--play" onClick={this.playPauseTrack}>
          <use xlinkHref="./img/sprite.svg#icon-play2" />
        </svg>
      );
    }
  }

  componentDidMount() {
    this.setState(prevState => {
      return {
        track: document.getElementById(this.props.track.id)
      };
    });
  }

  render() {
    let track = this.props.track;
    let date = track.album.release_date;
    let dateArr = date.split("");
    let formatedDateArr = dateArr.map(item => {
      if (item === "-") {
        return "/";
      }
      return item;
    });
    let stringformatedDateArr = formatedDateArr.toString();
    let finalDate = stringformatedDateArr.replace(/\,/g, "");

    const renderBtn = () => {
      if (track.preview_url === null) {
        return;
      } else {
        return this.playPauseBtn();
      }
    };
    return (
      <div className={this.props.classes}>
        <Audio url={track.preview_url} id={track.id} />
        <div className="trackcard--playpause">{renderBtn()}</div>
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
            <p>{finalDate}</p>
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
