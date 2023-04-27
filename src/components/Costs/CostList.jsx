import CostItem from "./CostItem";
import "./CostList.css";

const CostList = ({ itemList }) => {
  const notFoundCost = (
    <h2 className="cost__list__fallback">Found no costs!</h2>
  );

  return (
    <>
      {itemList.length === 0 && notFoundCost}
      {itemList.length > 0 && (
        <ul className="cost__list">
          {itemList.map((cost) => {
            return (
              <CostItem
                key={cost.id}
                date={cost.date}
                price={cost.price}
                title={cost.title}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};

export default CostList;
