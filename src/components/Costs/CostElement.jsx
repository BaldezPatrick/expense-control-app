import Card from "../Layout/Card";
import CostDate from "../Costs/CostDate";
import "./CostElement.css";

const CostElement = ({ date, name, price }) => {
  return (
    <>
      <Card className="cost__item">
        <CostDate date={date} />
        <div className="cost__desc__item">
          <h2>{name}</h2>
          <div className="cost__price__item">${price}</div>
          <button>change title</button>
        </div>
      </Card>
    </>
  );
};

export default CostElement;
