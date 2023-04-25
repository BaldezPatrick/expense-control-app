import "./AddCost.css";
import CostForm from "./CostForm";

const AddCost = ({ onAddCosts }) => {
  const saveCostHandler = (enteredCostData) => {
    const costData = {
      ...enteredCostData,
      id: Math.random().toString(),
    };
    onAddCosts(costData);
  };

  return (
    <div className="add__cost">
      <CostForm onSaveCostData={saveCostHandler} />
    </div>
  );
};

export default AddCost;
