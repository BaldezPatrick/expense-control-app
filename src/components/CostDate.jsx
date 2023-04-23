const CostDate = ({ date }) => {
  const day = date.toLocaleString("pt-br", { day: "2-digit" });
  const month = date.toLocaleString("pt-br", { month: "long" });
  const year = date.getFullYear();
  return (
    <div>
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
};

export default CostDate;
