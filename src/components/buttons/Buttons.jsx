// import React, { Component } from "react";
import React from "react";

const Buttons = ({ onHandleClick }) => {
  return (
    <>
      <button type="button" onClick={onHandleClick} data-name="good">
        Good
      </button>

      <button type="button" onClick={onHandleClick} data-name="neutral">
        Neutral
      </button>

      <button type="button" onClick={onHandleClick} data-name="bad">
        Bad
      </button>
    </>
  );
};

export default Buttons;
