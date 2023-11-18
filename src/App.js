import { useState } from "react";

import NewCost from "./components/NewCost/NewCost";
import Cost from "./components/Costs/Cost";

const INITIAL_COSTS = [
  {
    id: "1",
    date: new Date(2022, 9, 12),
    descr: "Холодильник",
    amount: 999.99,
  },
  {
    id: "2",
    date: new Date(2022, 11, 25),
    descr: "MacBook",
    amount: 1205.34,
  },
  {
    id: "3",
    date: new Date(2022, 4, 30),
    descr: "Одяг",
    amount: 358.65,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Cost costs={costs} />
    </div>
  );
}

export default App;
