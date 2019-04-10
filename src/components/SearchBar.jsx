import React from "react";
import axios from "axios";

/*axios
  .get(
    `https://spotify-api-wrapper.appspot.com/artist/0du5cEVh5yTK9QJze8zA0C/top-tracks`
  )
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });*/

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      focused: false
    };
    this.focus = this.focus.bind(this);
    this.searchTerm = null;
  }

  focus() {
    if (window.matchMedia("(max-width: 1024px)").matches) {
      document.getElementById("app--name").style.display = `none`;
    }
    document.getElementById(
      "searchbar"
    ).style.transform = `translateX(24rem) translateY(2rem)`;
    document.getElementById("cards").style.position = `relative`;
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
            this.setState(
              prevState => {
                return {
                  searchTerm: e.target.value
                };
              },
              () => {
                axios
                  .get(
                    `https://spotify-api-wrapper.appspot.com/artist/${
                      this.state.searchTerm
                    }`
                  )
                  .then(res => {
                    if (
                      res.data.artists.items.length &&
                      res.data.artists.items.length > 0
                    ) {
                      console.log(res);
                      this.props.getSideGridPhotosProp(res.data.artists.items);
                    } else {
                      console.log(`this is not existing ${res}`);
                    }
                  })
                  .catch(err => {
                    console.log(err);
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
          onClick={this.focus}
        />
      </div>
    );
  }
}

export default SearchBar;
