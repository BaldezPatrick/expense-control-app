import { useState } from "react";
import "./CostForm.css";

const CostForm = ({ onSaveCostData }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputDate, setInputDate] = useState("");

  const titleChangeHandler = (e) => {
    setInputTitle(e.target.value);
  };

  const valueChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const dateCHangeHandler = (e) => {
    setInputDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const costData = {
      title: inputTitle,
      value: inputValue,
      date: new Date(inputDate),
    };

    onSaveCostData(costData);
    setInputTitle("");
    setInputValue("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="cost__add__controls">
        <div className="cost__add__control">
          <label>Title</label>
          <input type="text" value={inputTitle} onChange={titleChangeHandler} />
        </div>

        <div className="cost__add__control">
          <label>Value</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputValue}
            onChange={valueChangeHandler}
          />
        </div>

        <div className="cost__add__control">
          <label>Date</label>
          <input
            type="date"
            min="31-01-2019"
            max="31-12-2023"
            value={inputDate}
            onChange={dateCHangeHandler}
          />
        </div>
      </div>

      <div className="cost__add__actions">
        <button>Add Cost</button>
      </div>
    </form>
  );
};

export default CostForm;
