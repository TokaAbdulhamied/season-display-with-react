// import react and reactDom lib
import React from "react";
import ReactDOM from "react-dom";
import Comment from "./comment";
import faker from "faker";
import ApprovalCard from "./approvalCard";

// creat react-components

const App = () => {
  return (
    <div className="ui comments container">
      <ApprovalCard>
        <Comment
          author="Toka"
          time="Today at 5:00"
          text="this is the first comment "
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <h3>Warning</h3>
        <div>are you sure?</div>
      </ApprovalCard>
      <Comment
        author="Yaso"
        time="Today at 2:30"
        text="this is the second comment "
        avatar={faker.image.avatar()}
      />
    </div>
  );
};
// render the component in the screen
ReactDOM.render(<App />, document.querySelector("#root"));
