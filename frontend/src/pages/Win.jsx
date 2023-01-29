import React from "react";
import { NavLink } from "react-router-dom";

function Win() {
  return (
    <div>
      <h1>WINNER</h1>
      <button type="button">
        <NavLink to="/map">GO HOME</NavLink>
      </button>
    </div>
  );
}

export default Win;
