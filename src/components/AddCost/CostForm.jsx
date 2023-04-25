import { useState } from "react";
import "./CostForm.css";

const CostForm = () => {
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

  return (
    <form>
      <div className="cost__add__controls">
        <div className="cost__add__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="cost__add__control">
          <label>Value</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={valueChangeHandler}
          />
        </div>

        <div className="cost__add__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateCHangeHandler}
          />
        </div>
      </div>

      <div className="cost__add__actions">
        <button type="submit">Add Cost</button>
      </div>
    </form>
  );
};

export default CostForm;
