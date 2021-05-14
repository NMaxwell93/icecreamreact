import React from "react";
import "./App.css";
import Header from "./components/Header";
import AdDesigner from "./components/Ad-designer";
import VoteHere from "./components/VoteHere"

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="AdContainer">
      <AdDesigner/>
      </div>
      <div className="VoteBox">
      <VoteHere/>
      </div>
    </div>
  );
}

export default App;
