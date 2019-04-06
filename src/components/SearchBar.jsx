import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      focused: false
    };
    this.focus = this.focus.bind(this);
  }

  focus() {
    this.setState(
      prevState => {
        return {
          focused: true
        };
      },
      () => {
        document
          .getElementById("search")
          .addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
              if (window.matchMedia("(max-width: 1024px)").matches) {
                document.getElementById("app--name").style.display = `none`;
              }
              document.getElementById(
                "searchbar"
              ).style.transform = `translateY(2rem)`;
              document.getElementById("app--name").style.top = `3%`;
              document.getElementById("app--name").style.left = `3%`;
              document.getElementById("app--name").style.fontSize = `2.5rem`;
              document.getElementById("app__name--svg").style.height = `4.5rem`;
              document.getElementById("app__name--svg").style.width = `4.5rem`;
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
