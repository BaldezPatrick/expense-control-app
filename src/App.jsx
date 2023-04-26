import AddCost from "./components/AddCost/AddCost";
import CostElement from "./components/Costs/CostElement";
import Card from "./components/Layout/Card";

function App() {
  const costs = [
    {
      title: "Carro",
      price: "100.000",
      date: new Date(),
    },
  ];
  const addCostHandler = (costs) => {
    console.log(costs);
  };

  return (
    <>
      <AddCost onAddCosts={addCostHandler} />
      <CostElement costs={costs} />
    </>
  );
}

export default App;
