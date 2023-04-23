import CostElement from "./components/CostElement";
import Card from "./components/Card";

function App() {
  const date = new Date(2019, 2, 3);
  return (
    <Card>
      <CostElement date={date} />
    </Card>
  );
}

export default App;
