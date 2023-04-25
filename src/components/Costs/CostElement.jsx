import Card from "../Layout/Card";
import "./CostElement.css";
import CostItem from "./CostItem";

const CostElement = ({ costs }) => {
  return (
    <>
      <Card className="cost">
        <CostItem
          title={costs[0].title}
          date={costs[0].date}
          price={costs[0].price}
        />
      </Card>
    </>
  );
};

export default CostElement;
