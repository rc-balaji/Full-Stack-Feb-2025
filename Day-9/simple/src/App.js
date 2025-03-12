import React from "react";
import Card from "./Card";
import "./App.css";
import Icon from "./icon.png";

const App = () => {
  return (
    <div>
      <Card
        imageUrl={Icon}
        name={"Avi"}
        destination={"ENG"}
        college={"SNS"}
        hobbies={["EAT", "Play"]}
      />
      <Card
        imageUrl={Icon}
        name={"Avi"}
        destination={"ENG"}
        college={"SNS"}
        hobbies={["EAT", "Play"]}
      />
    </div>
  );
};

export default App;
