import React from "react";
import CandyList from "./CandyList";

const Root = () => {
  return (
    <div>
      <nav>Goodie Bag</nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
      </main>
      <CandyList/>
    </div>
  );
};

export default Root;
