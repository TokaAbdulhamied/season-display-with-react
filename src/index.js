import React from "react";
import ReactDOM from "react-dom";
import Season from "./season";
class App extends React.Component {
  state = { latitude: null, errMassage: "" };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (err) => this.setState({ errMassege: err.message })
    );
  }
  renderContent() {
    if (this.state.errMassege && !this.state.latitude)
      return <div>err:{this.state.errMassege}</div>;
    else if (!this.state.errMassege && this.state.latitude) {
      return (
        <div>
          <Season lat={this.state.latitude} />
        </div>
      );
    } else {
      return (
        <div class="ui active dimmer">
          <div class="ui text loader">Loading</div>
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
