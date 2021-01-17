import React, { Component } from "react";
import Buttons from "../buttons/Buttons";
import Info from "../info/Info";
import Notifications from "../notification/Notifications";
// import Statistics from "../statistics/Statistics";

export default class FeedbackApp extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const goodPercent =
      this.countTotalFeedback() > 0
        ? (good * 100) / this.countTotalFeedback()
        : 0;
    return Math.round(goodPercent);
  };

  onHandleClick = (e) => {
    const key = e.target.dataset.name;
    this.setState((prev) => ({ [key]: prev[key] + 1 }));
  };
  render() {
    return (
      <>
        <h1> Please leave feedback! </h1>
        <Buttons onHandleClick={this.onHandleClick} />
        <h2>Statistics:</h2>
        {this.countTotalFeedback() === 0 ? (
          <Notifications message="No feedback given"></Notifications>
        ) : (
          <Info
            {...this.state}
            countTotalFeedback={this.countTotalFeedback()}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </>
    );
  }
}
