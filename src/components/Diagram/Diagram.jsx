import DiagramBar from "./DiagramBar";
import "./Diagram.css";

const Diagram = ({ dataCosts }) => {
  const dataCostValues = dataCosts.map((dataCost) => dataCost.value);
  const max = Math.max(...dataCostValues);
  return (
    <div className="diagram">
      {dataCosts.map((dataCost) => (
        <DiagramBar
          key={dataCost.label}
          value={dataCost.value}
          maxValue={dataCostValues}
          label={dataCost.label}
        />
      ))}
    </div>
  );
};

export default Diagram;
