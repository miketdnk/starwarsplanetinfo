import React, { Component } from "react";
import CharInfo from "./CharInfo";

class List extends Component {
  render() {
    const planet = this.props.planet;

    return (
      <div className="">
        {planet.map(p => {
          console.log(p);
          return (
            <div key={p.url}>
              <h1 className="char-name">{p.name}</h1>
              <CharInfo charInfo={p} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
