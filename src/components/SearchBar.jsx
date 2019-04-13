import React from "react";
import axios from "axios";

import Global from "../global";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      focused: false,
      artistId: false
    };
    this.focus = this.focus.bind(this);
    this.searchTerm = null;
  }

  focus() {
    window.removeEventListener("keypress", Global.pausePlayMusic, false);
    if (window.matchMedia("(max-width: 1024px)").matches) {
      document.getElementById("app--name").style.display = `none`;
    }
    document.getElementById(
      "searchbar"
    ).style.transform = `translateX(24rem) translateY(-11rem)`;
    document.getElementById("cards").style.display = `grid`;
    document.getElementById("cards").style.position = `relative`;
    document.getElementById("cards").style.zIndex = `1000`;
    document.getElementById("searchbar").style.position = `fixed`;
    document.getElementById("app--name").style.top = `3%`;
    document.getElementById("app--name").style.left = `3%`;
    document.getElementById("app--name").style.fontSize = `2.5rem`;
    document.getElementById("app__name--svg").style.height = `4.5rem`;
    document.getElementById("app__name--svg").style.width = `4.5rem`;
    this.setState(
      prevState => {
        return {
          focused: true
        };
      },
      () => {
        document.getElementById("search").addEventListener("keypress", e => {
          if (e.key === "Enter") {

            this.props.therewasaproblem.style.display = `none`
            this.props.notfound.style.display = `none`
            this.props.searchTrigger();
            this.props.loadingAnime.style.display = `block`
            this.setState(
              prevState => {
                return {
                  searchTerm: e.target.value
                };
              },
              () => {
                e.target.value = "";
                axios
                  .get(
                    `https://spotify-api-wrapper.appspot.com/artist/${
                      this.state.searchTerm
                    }`
                  )
                  .then(res => {
                    //console.log(res)
                    if (
                      res.data.artists.items.length &&
                      res.data.artists.items.length > 0
                    ) {
                      this.props.loadingAnime.style.display = `none`
                      this.props.therewasaproblem.style.display = `none`
                      this.props.searchUnTrigger();
                      const artistsDetails = res.data.artists;
                      this.setState(
                        prevState => {
                          return {
                            artistId: res.data.artists.items[0].id
                          };
                        },
                        () => {
                          axios
                            .get(
                              `https://spotify-api-wrapper.appspot.com/artist/${
                                this.state.artistId
                              }/top-tracks`
                            )
                            .then(res => {
                              const artistTopTracks = res.data.tracks;
                              this.props.getSideGridPhotosProp(
                                artistsDetails.items,
                                artistTopTracks
                              );
                            })
                            .catch(err => {
                              console.log(err);
                            });
                        }
                      );
                    } else {
                      this.props.loadingAnime.style.display = `none`
                      this.props.notfound.style.display = `block`
                    }
                  })
                  .catch((res, err) => {
                    //console.log(err);
                    this.props.loadingAnime.style.display = `none`
                    if (!res) {
                      this.props.therewasaproblem.style.display = `block`
                    }
                  });
              }
            );
          }
        });
      }
    );
  }

  render() {
    return (
      <div className="searchbar" id="searchbar">
        <input
          className="searchbar--input"
          type="text"
          id="search"
          name="search"
          placeholder="Find an artist"
          onClick={this.focus}
        />
      </div>
    );
  }
}

export default SearchBar;
