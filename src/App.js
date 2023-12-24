import React from "react";
import Transaction from "./components/Transaction"

const Title = () => <h1>Accounting application</h1>;
const Description = () => <p>Saving in each days</p>;


function App() {
  return (
    <>
      <Title></Title>
      <Description></Description>
      <Transaction></Transaction>
    </>
  );
}

export default App;
