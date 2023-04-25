import AddCost from "./components/AddCost/AddCost";
import CostElement from "./components/Costs/CostElement";
import Card from "./components/Layout/Card";

function App() {
  const date = new Date(2019, 2, 3);
  return (
    <>
      <AddCost />
      <Card className="cost">
        <CostElement date={date} name={"Bike"} price={2000} />
      </Card>
    </>
  );
}

export default App;
