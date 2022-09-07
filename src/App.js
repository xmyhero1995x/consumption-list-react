import { Costs } from "./components/Costs/Costs";
import { NewCost } from "./components/NewCost/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2022, 3, 4),
    description: "MacBook",
    amount: 1250,
  },
  {
    id: "c2",
    date: new Date(2022, 12, 12),
    description: "TV",
    amount: 250,
  },
  {
    id: "c3",
    date: new Date(2022, 1, 4),
    description: "Jeans",
    amount: 150,
  },
];

const App = () => {
const[costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    })
  };

  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler}></NewCost>
      <Costs costs={costs} />
    </div>
  );
};

export default App;
