import React from "react";

class OtherCards extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div className="othercards">{this.props.renderCards()}</div>;
  }
}

export default OtherCards;
