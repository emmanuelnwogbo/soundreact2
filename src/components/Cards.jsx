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
    this.renderPhoneViewTracks = this.renderPhoneViewTracks.bind(this)
  }

  renderPhoneViewTracks() {
    if (this.props.topTracks) {
      return this.props.topTracks.map(track => {
          return (
            <TrackCard
              classes={"trackcard othercards--trackcard"}
              key={track.id}
              track={track}
            />
          );
      });
    }
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
    if (window.matchMedia("(max-width: 851px)").matches) {
      return;
    }
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
    if (window.matchMedia("(max-width: 851px)").matches) {
      console.log('test')
      if (this.props.topTracks) {
        return this.props.topTracks.map(track => {
            return (
              <TrackCard
                classes={"trackcard othercards--trackcard"}
                key={track.id}
                track={track}
              />
            );
        });
      }
    }
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
    if (!this.props.searchTriggered && window.matchMedia("(max-width: 630px)").matches) {
      return (
        <div className="phoneview" id="phoneview">
          {this.renderSideImages()}
          {this.renderPhoneViewTracks()}
        </div>
      )
    }
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
