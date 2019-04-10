import React from "react";

import Banner from "./Banner";

class Cards extends React.Component {
  constructor() {
    super();
    this.renderSideImages = this.renderSideImages.bind(this);
  }

  renderSideImages() {
    if (this.props.artist) {
      return <Banner imgs={this.props.artist.images} />;
    }
    return;
  }

  render() {
    return (
      <div className="cards" id="cards">
        {this.renderSideImages()}
      </div>
    );
  }
}

export default Cards;
