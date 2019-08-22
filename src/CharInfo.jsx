import React, { Component } from "react";

class CharInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ expanded: !this.state.expanded });
  }

  close() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const info = this.props.charInfo;

    if (!this.state.expanded) {
      return (
        <p className="btn btn-info" onClick={this.open}>
          Show info
        </p>
      );
    }

    return (
      <div className="user-details">
        <p className="btn btn-danger" onClick={this.close}>
          Hide info
        </p>
        <ul>
          <li>
            <h2>Population: {info.population}</h2>
          </li>
          <li>
            <h2>Climate: {info.climate}</h2>
          </li>
          <li>
            <h2>Terrain: {info.terrain}</h2>
          </li>
          <li>
            <h2>Featured in : {info.films.length} movies</h2>
          </li>
        </ul>
      </div>
    );
  }
}

export default CharInfo;
