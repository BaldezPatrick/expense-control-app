import { useState } from "react";
import Card from "../Layout/Card";
import CostDiagram from "./CostDiagram";
import "./CostElement.css";
import CostFilter from "./CostFilter";
import CostList from "./CostList";

const CostElement = ({ costs }) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterHandlerChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredCosts = costs.filter((cost) => {
    return cost.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="cost">
        <CostFilter
          selected={filteredYear}
          onChangeFilter={filterHandlerChange}
        />
        <CostDiagram costs={filteredCosts} />
        <CostList itemList={filteredCosts} />
      </Card>
    </>
  );
};

export default CostElement;
