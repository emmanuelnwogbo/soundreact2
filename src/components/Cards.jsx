import React from "react";

import Banner from "./Banner";
import TrackCard from "./TrackCard";

class Cards extends React.Component {
  constructor() {
    super();
    this.renderSideImages = this.renderSideImages.bind(this);
    this.renderTrackCards = this.renderTrackCards.bind(this);
  }

  renderSideImages() {
    if (this.props.artist) {
      return (
        <Banner
          imgs={this.props.artist.images}
          ArtistDetails={this.props.artist}
        />
      );
    }
    return;
  }

  renderTrackCards() {
    if (this.props.topTracks) {
      return this.props.topTracks.map(track => {
        return <TrackCard key={track.id} track={track} />;
      });
    }
    return;
  }

  render() {
    return (
      <div className="cards" id="cards">
        {this.renderSideImages()}
        {this.renderTrackCards()}
      </div>
    );
  }
}

export default Cards;
