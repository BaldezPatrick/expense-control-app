import { useState } from "react";
import "./CostForm.css";

const CostForm = ({ onSaveCostData, closeAddHandler }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputDate, setInputDate] = useState("");

  const titleChangeHandler = (e) => {
    setInputTitle(e.target.value);
  };

  const priceChangeHandler = (e) => {
    setInputPrice(e.target.value);
  };

  const dateCHangeHandler = (e) => {
    setInputDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const costData = {
      title: inputTitle,
      price: +inputPrice,
      date: new Date(inputDate),
    };

    onSaveCostData(costData);
    closeAddHandler();
    setInputTitle("");
    setInputPrice("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="cost__add__controls">
        <div className="cost__add__control">
          <label>Product</label>
          <input type="text" value={inputTitle} onChange={titleChangeHandler} />
        </div>

        <div className="cost__add__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputPrice}
            onChange={priceChangeHandler}
          />
        </div>

        <div className="cost__add__control">
          <label>Purchase date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
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
