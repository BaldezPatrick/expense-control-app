import Card from "../Layout/Card";
import CostDate from "./CostDate";
import "./CostItem.css";

const CostItem = ({ title, date, price }) => {
  return (
    <Card className="cost__item">
      <CostDate date={date} />
      <div className="cost__desc__item">
        <h2>{title}</h2>
        <div className="cost__price__item">{price}</div>
      </div>
    </Card>
  );
};

export default CostItem;
