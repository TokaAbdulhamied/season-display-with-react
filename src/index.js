// import react and reactDom lib
import React from "react";
import ReactDOM from "react-dom";
// creat react-components
const buttonText = "Add";

const App = () => {
  return (
    <div>
      <label htmlFor="name">Enter Name</label>
      <input type="text" />
      <button type="submit" style={{ color: "white", backgroundColor: "blue" }}>
        {buttonText}
      </button>
    </div>
  );
};
// render the component in the screen
ReactDOM.render(<App />, document.querySelector("#root"));
