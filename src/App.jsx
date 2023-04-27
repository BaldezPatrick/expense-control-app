import { useState } from "react";
import AddCost from "./components/AddCost/AddCost";
import CostElement from "./components/Costs/CostElement";

const initialCosts = [];

function App() {
  const [cost, setCost] = useState(initialCosts);

  const addCostHandler = (costs) => {
    setCost((prevCostsState) => {
      return [costs, ...prevCostsState];
    });
    console.log(costs);
  };

  return (
    <>
      <AddCost onAddCosts={addCostHandler} />
      <CostElement costs={cost} />
    </>
  );
}

export default App;
