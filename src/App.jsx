import React from "react";

import SearchBar from "./components/SearchBar";
import Cards from "./components/Cards";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      artist: false,
      topTracks: false,
      loadingAnimation: false,
      notFound: false,
      searchTriggered: false,
      thereWasaProblem: false
    };
    this.getSideGridPhotos = this.getSideGridPhotos.bind(this);
    this.triggerSearch = this.triggerSearch.bind(this);
    this.untriggerSearch = this.untriggerSearch.bind(this);
  }

  triggerSearch() {
    this.setState(prevState => {
      return {
        searchTriggered: true
      }
    })
  }

  untriggerSearch() {
    this.setState(prevState => {
      return {
        searchTriggered: false
      }
    })
  }

  getSideGridPhotos(artist, topTracks) {
    this.setState(prevState => {
      return {
        artist: artist[0],
        topTracks
      };
    });
  }

  componentDidMount() {
    this.setState(prevState => {
      return {
        loadingAnimation: document.getElementById('loadingAnimation'),
        notFound: document.getElementById('notfound'),
        thereWasaProblem: document.getElementById('therewasaproblem'),
      }
    })
  }

  render() {
    return (
      <div className="app">
        <div
          style={{
            width: "100%",
            height: "9vh",
            background: "#000000",
            position: "fixed",
            zIndex: "9900",
            top: "0",
            left: "0"
          }}
        />
        <div className="loadingAnimation" id="loadingAnimation">
          <div className="loadingAnimation--circle" />
        </div>
        <div className="notfound" id="notfound">
          <div className="notfound--text">
            <p>No Results Found</p>
          </div>
        </div>
        <div className="therewasaproblem" id="therewasaproblem">
          <div className="therewasaproblem--text">
            <p>Oops, There was a Problem</p>
            <p>Please retry your search again</p>
          </div>
        </div>
        <div className="app--name" id="app--name">
          <p>SoundReact</p>
          <svg className="app__name--svg" id="app__name--svg">
            <use xlinkHref="./img/sprite.svg#icon-react" />
          </svg>
        </div>
        <div className="app--name-phone" id="app--name-phone">
          <p>SoundReact</p>
          <svg className="app__name--svg" id="app__name--svg">
            <use xlinkHref="./img/sprite.svg#icon-react" />
          </svg>
        </div>
        <SearchBar searchUnTrigger={this.untriggerSearch}
          searchTrigger={this.triggerSearch}
          loadingAnime={this.state.loadingAnimation}
          notfound={this.state.notFound}
          therewasaproblem={this.state.thereWasaProblem}
          getSideGridPhotosProp={this.getSideGridPhotos} />
        <Cards searchTriggered={this.state.searchTriggered}
          artist={this.state.artist}
          topTracks={this.state.topTracks} />
      </div>
    );
  }
}

export default App;
