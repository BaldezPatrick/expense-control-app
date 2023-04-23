import React from "react";
import CostDate from "./CostDate";
import "./CostElement.css";

const CostElement = ({ date }) => {
  return (
    <>
      <div className="cost__item">
        <CostDate date={date} />
        <div className="cost__desc__item">
          <h2>Car</h2>
          <div className="cost__price__item">$100.000</div>
        </div>
      </div>
    </>
  );
};

export default CostElement;
