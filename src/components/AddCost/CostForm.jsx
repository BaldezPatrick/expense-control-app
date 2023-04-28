import { useState } from "react";
import "./CostForm.css";

const CostForm = ({ onSaveCostData, closeAddHandler }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [isInputGroup, setIsInputGroup] = useState(false);

  const titleChangeHandler = (e) => {
    setInputTitle(e.target.value);
    if (!inputTitle) return setIsInputGroup(false);
  };

  const priceChangeHandler = (e) => {
    setInputPrice(e.target.value);
    if (!inputPrice) return setIsInputGroup(false);
  };

  const dateCHangeHandler = (e) => {
    setInputDate(e.target.value);
    if (!inputDate) return setIsInputGroup(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const costData = {
      title: inputTitle,
      price: +inputPrice,
      date: new Date(inputDate),
    };

    if (!inputDate || !inputPrice || !inputTitle) {
      setIsInputGroup(true);
      return;
    }

    onSaveCostData(costData);
    closeAddHandler();
    setInputTitle("");
    setInputPrice("");
    setInputDate("");
  };

  const WarningMessage = () => {
    return (
      <p style={{ color: isInputGroup ? "red" : "" }}>
        É preciso preencher todos os campos
      </p>
    );
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
      {isInputGroup ? <WarningMessage /> : ""}
      <div className="cost__add__actions">
        <button>Add Cost</button>
      </div>
    </form>
  );
};

export default CostForm;
