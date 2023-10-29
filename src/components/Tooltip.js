import React, { Component } from "react";
import "../tooltip.css";

export default class Tooltip extends Component {
  // constructor to create state for this class
  constructor() {
    super();
    this.state = {
      direction: "tooltiptext tooltip-top",
      content: "Tooltip Content",
    };
  }

  //  function to change values if data change 
  handleTooltip = () => {
    // setting content of tooltip
    this.setState({
      content: this.props.content,
    });

    // setting up direction of tooltip
    if (this.props.direction === "top") {
      this.setState({
        direction: "tooltiptext tooltip-top",
      });
    } else if (this.props.direction === "right") {
      this.setState({
        direction: "tooltiptext tooltip-right",
      });
    } else if (this.props.direction === "left") {
      this.setState({
        direction: "tooltiptext tooltip-left",
      });
    } else {
      this.setState({
        direction: "tooltiptext tooltip-bottom",
      });
    }
  };

  render() {
    return (
      // div for binding component for tooltip
      <div className="my-tooltip" onMouseEnter={this.handleTooltip}>
        {/* span for tooltip text */}
        <span className={this.state.direction}>{this.state.content}</span>
        {/* component fetching from where is called */}
        {this.props.children}
      </div>
    );
  }
}