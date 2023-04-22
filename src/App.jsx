import CostElement from "./components/CostElement";

function App() {
  const date = new Date(2019, 2, 3);
  return (
    <div>
      <CostElement date={date} />
    </div>
  );
}

export default App;
