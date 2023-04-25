import "./CostForm.css";

const CostForm = () => {
  return (
    <form>
      <div className="cost__add__controls">
        <div className="cost__add__control">
          <label>Title</label>
          <input type="text" />
        </div>

        <div className="cost__add__control">
          <label>Value</label>
          <input type="number" min="0.01" step="0.01" />
        </div>

        <div className="cost__add__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31" />
        </div>
      </div>

      <div className="cost__add__actions">
        <button type="submit">Add Cost</button>
      </div>
    </form>
  );
};

export default CostForm;
