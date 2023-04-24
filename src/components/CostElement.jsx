import Card from "./Card";
import CostDate from "./CostDate";
import "./CostElement.css";

const CostElement = ({ date }) => {
  return (
    <>
      <Card className="cost__item">
        <CostDate date={date} />
        <div className="cost__desc__item">
          <h2>Car</h2>
          <div className="cost__price__item">$100.000</div>
        </div>
      </Card>
    </>
  );
};

export default CostElement;
