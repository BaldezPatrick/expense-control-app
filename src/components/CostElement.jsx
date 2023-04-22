import React from "react";
import "./CostElement.css";

const CostElement = ({ date }) => {
  const day = date.toLocaleString("pt-br", { day: "2-digit" });
  const month = date.toLocaleString("pt-br", { month: "long" });
  const year = date.getFullYear();
  return (
    <>
      <div className="cost__item">
        <div>
          <div>{day}</div>
          <div>{month}</div>
          <div>{year}</div>
        </div>
        <div className="cost__desc__item">
          <h2>Car</h2>
          <div className="cost__price__item">$100.000</div>
        </div>
      </div>
    </>
  );
};

export default CostElement;
