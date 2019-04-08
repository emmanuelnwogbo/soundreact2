import React from "react";

import PlayerBar from "./components/PlayerBar";
import SearchBar from "./components/SearchBar";
console.log(SearchBar);

const App = () => {
  return (
    <div className="app">
      <div className="app--name" id="app--name">
        <p>SoundReacter</p>
        <svg className="app__name--svg" id="app__name--svg">
          <use xlinkHref="./img/sprite.svg#icon-react" />
        </svg>
      </div>
      <SearchBar />
      <PlayerBar />
    </div>
  );
};

export default App;
