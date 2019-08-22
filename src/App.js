import React, { Component } from "react";
import List from "./List";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planet: []
    };

    this.getPlanet = this.getPlanet.bind(this);
  }

  getPlanet() {
    return axios.get("https://swapi.co/api/planets").then(response => {
      console.log(response.data.results);
      this.setState({ planet: response.data.results });
    });
  }

  componentDidMount() {
    this.getPlanet();
  }

  render() {
    const { planet } = this.state;
    return (
      <div className="App">
        <List planet={planet} />
      </div>
    );
  }
}

export default App;
