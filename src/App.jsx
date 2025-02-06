import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "john wick",
        bio: "A passionate software engineer.",
        imgSrc: "https://m.media-amazon.com/images/M/MV5BMjFjN2FjZWEtNzFlNC00Y2RiLThkMjgtMzMzZGMyMWUwNTM5XkEyXkFqcGdeQWpnYW1i._V1_.jpg",
        profession: "Software Engineer",
      },
      shows: false,
      timeInterval: 0,
    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timeInterval: prevState.timeInterval + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { person, shows, timeInterval } = this.state;

    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>React Class Component Profile</h1>
        <button onClick={this.toggleProfile} style={{ marginBottom: "10px", padding: "10px" }}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div style={{ border: "1px solid black", padding: "20px", marginTop: "10px" }}>
            <img src={person.imgSrc} alt={person.fullName} style={{ borderRadius: "10%" }} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h3>{person.profession}</h3>
          </div>
        )}
        <h3>Time since component mounted: {timeInterval} seconds</h3>
      </div>
    );
  }
}

export default App;
