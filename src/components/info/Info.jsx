import React from "react";

const Info = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <>
      <p> Good: {good} </p>
      <p> Neutral: {neutral} </p>
      <p> Bad: {bad} </p>
      <p>Total: {countTotalFeedback}</p>
      <p>Positive feedback: {countPositiveFeedbackPercentage}%</p>
    </>
  );
};

export default Info;
