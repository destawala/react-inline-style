//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const currentTime = new Date();
let message = "";

let timeColor = "";

if (currentTime.getHours() >= 0 && currentTime.getHours() < 12) {
  message = "Good morning";
  timeColor = "red";
} else if (currentTime.getHours() >= 12 && currentTime.getHours() <= 18) {
  message = "Good afternoon";
  timeColor = "green";
} else {
  message = "Good evening";
  timeColor = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={{ color: timeColor }}>
      {message} {currentTime.getHours()}
    </h1>
  </div>,
  document.getElementById("root")
);
