import React from "react";
import { useSelector } from "react-redux";

import { selectedStrategyTitle } from "../../constants";
import { getResearches } from "../../store/programs/selectors";

function Tooltip({
  programId,
  strategy,
  position,
}) {
  const researches = useSelector(getResearches(programId, strategy));

  const containerStyle = {
    position: "absolute",
    top: position.y + 10,
    left: position.x + 10,
    backgroundColor: "#151515",
    color: "white",
    padding: 5,
    borderRadius: 5,
  };
  return (
    <div style={containerStyle}>
      <div>{selectedStrategyTitle[strategy]}</div>
      {researches.map(research => (
        <div key={`tooltip-research-${research._id}`} style={{ fontSize: 12, }}>{research.title}</div>
      ))}
    </div>
  )
};

export default Tooltip;