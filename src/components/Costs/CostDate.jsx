import "./CostDate.css";

const CostDate = ({ date }) => {
  const day = date.toLocaleString("pt-br", { day: "2-digit" });
  const month = date.toLocaleString("pt-br", { month: "long" });
  const year = date.getFullYear();
  return (
    <div className="cost__date">
      <div className="cost__date__day">{day}</div>
      <div className="cost__date__month">{month}</div>
      <div className="cost__date__year">{year}</div>
    </div>
  );
};

export default CostDate;
