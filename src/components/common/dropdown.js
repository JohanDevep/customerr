import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

const CommonDropdown = ({ options, onSelect, selectedOption }) => {

  return (
    <select
      className="form-select"
      value={selectedOption}
      onChange={(e) => onSelect(e.target.value)}
    >
      <option selected>
        Select
      </option>
      {options.map((option,id) => (
        <option key={option.id} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default CommonDropdown;
