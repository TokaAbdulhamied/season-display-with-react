import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    // initialzing state
    // This is the only time we do direct assignment to this.state
    this.state = { latitude: null, errMassage: "" };

    navigator.geolocation.getCurrentPosition(
      // Each time we update state with SetState rerendering will accure
      (position) => {
        return this.setState({ latitude: position.coords.latitude });
      },
      (err) => {
        return this.setState({ errMassege: err.message });
      }
    );
  }
  // WE HAVE TO DEFINE RENDER
  render() {
    if (this.state.errMassege && !this.state.latitude)
      return <div>err:{this.state.errMassege}</div>;
    else if (!this.state.errMassege && this.state.latitude)
      return <div>latitude is :{this.state.latitude}</div>;
    else return <div>Loading</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
