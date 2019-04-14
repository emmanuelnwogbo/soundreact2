import React from "react";

import Banner from "./Banner";
import TrackCard from "./TrackCard";
import OtherCards from "./OtherCards";

class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      population: false
    }
    this.renderSideImages = this.renderSideImages.bind(this);
    this.renderTrackCards = this.renderTrackCards.bind(this);
    this.renderOtherCards = this.renderOtherCards.bind(this);
    this.populateCard = this.populateCard.bind(this);
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
        if (this.props.topTracks.indexOf(track) < 2) {
          return (
            <TrackCard
              classes={"trackcard banner--trackcard"}
              key={track.id}
              track={track}
            />
          );
        }
      });
    }
    return;
  }

  renderOtherCards() {
    if (this.props.topTracks) {
      return this.props.topTracks.map(track => {
        if (this.props.topTracks.indexOf(track) > 1) {
          return (
            <TrackCard
              classes={"trackcard othercards--trackcard"}
              key={track.id}
              track={track}
            />
          );
        }
      });
    }
  }

  populateCard() {
    if (!this.props.searchTriggered) {
      return (
        <div className="cards" id="cards">
          {this.renderSideImages()}
          {this.renderTrackCards()}
          <OtherCards renderCards={this.renderOtherCards} />
        </div>
      )
    }
    return (
      <div className="cards" id="cards">

      </div>
    )
  }

  render() {
    return (
      <div>
        {this.populateCard()}
      </div>
    )
  }
}

export default Cards;
