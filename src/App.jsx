import { useState } from "react";
import AddCost from "./components/AddCost/AddCost";
import CostElement from "./components/Costs/CostElement";

const initialCosts = [
  {
    id: 1,
    title: "Carro",
    price: "100.000",
    date: new Date(),
  },
  {
    id: 2,
    title: "Casa",
    price: "250.000",
    date: new Date("2020-02-21"),
  },
];

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
