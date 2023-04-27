import DiagramBar from "./DiagramBar";
import "./Diagram.css";
import { useState } from "react";
import { useEffect } from "react";

const Diagram = ({ dataCosts }) => {
  const [isShow, setIsShow] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const screenWidthUpdate = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", screenWidthUpdate);
    return () => {
      window.removeEventListener("resize", screenWidthUpdate);
    };
  }, []);

  const showDiagram = () => {
    setIsShow(!isShow);
  };
  const buttonText = isShow ? "Hide Months" : "Show Months";

  const dataCostValues = dataCosts.map((dataCost) => dataCost.value);
  const max = Math.max(...dataCostValues);

  return (
    <div className="diagram">
      {screenWidth <= 500 ? (
        <>
          <button onClick={showDiagram}>{buttonText}</button>
          {isShow &&
            dataCosts.map((dataCost) => (
              <DiagramBar
                key={dataCost.label}
                value={dataCost.value}
                maxValue={max}
                label={dataCost.label}
              />
            ))}
        </>
      ) : (
        dataCosts.map((dataCost) => (
          <DiagramBar
            key={dataCost.label}
            value={dataCost.value}
            maxValue={max}
            label={dataCost.label}
          />
        ))
      )}
    </div>
  );
};

export default Diagram;
