import React from "react";

import SearchBar from "./components/SearchBar";
import Cards from "./components/Cards";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      artist: false,
      topTracks: false
    };
    this.getSideGridPhotos = this.getSideGridPhotos.bind(this);
  }

  getSideGridPhotos(artist, topTracks) {
    this.setState(prevState => {
      return {
        artist: artist[0],
        topTracks
      };
    });
  }

  render() {
    return (
      <div className="app">
        <div
          style={{
            width: "100%",
            height: "9vh",
            background: "rgb(23, 32, 42)",
            position: "fixed",
            zIndex: "3000"
          }}
        />
        <div className="app--name" id="app--name">
          <p>SoundReact</p>
          <svg className="app__name--svg" id="app__name--svg">
            <use xlinkHref="./img/sprite.svg#icon-react" />
          </svg>
        </div>
        <SearchBar getSideGridPhotosProp={this.getSideGridPhotos} />
        <Cards artist={this.state.artist} topTracks={this.state.topTracks} />
      </div>
    );
  }
}

export default App;
