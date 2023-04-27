import { useState } from "react";
import "./AddCost.css";
import CostForm from "./CostForm";

const AddCost = ({ onAddCosts }) => {
  const [isShow, setIsShow] = useState(false);

  const showAddHandler = () => {
    setIsShow(true);
  };

  const closeAddHandler = () => {
    setIsShow(false);
  };

  const saveCostHandler = (enteredCostData) => {
    const costData = {
      ...enteredCostData,
      id: Math.random().toString(),
    };
    onAddCosts(costData);
  };

  return (
    <div className="add__cost">
      {isShow ? (
        <CostForm
          onSaveCostData={saveCostHandler}
          closeAddHandler={closeAddHandler}
        />
      ) : (
        <button onClick={showAddHandler}>Add new Cost</button>
      )}
    </div>
  );
};

export default AddCost;
