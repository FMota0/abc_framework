import React from "react";
import LabeledBox from "../LabeledBox";

function Select(props) {
  const {
    label,
    options,
    onChange,
  } = props;

  const selectStyle = {
    width: "100%",
    padding: "4px",
    borderRadius: "4px",
  };
  return (
    <LabeledBox
      label={label}
      area={(
        <select
          label={label}
          style={selectStyle}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map(option => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      )}
    />
  )
}

export default Select;