import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Tooltip from "./components/Tooltip";

export default class App extends Component {

  // constructor to create state for this class
  constructor() {
    super();
    this.state = {
      direction: "top",
      content: "Tooltip Content",
    };
  }

  // function to handle input content for hover
  handleContentInput = (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 0) {
      this.setState({
        content: e.target.value,
      });
    } else {
      this.setState({
        content: "Tooltip Content",
      });
    }
  };

  // function to handle direction according to select option
  handleDirectionInput = (e) => {
    console.log(e.target.value);
    this.setState({
      direction: e.target.value,
    });
  };
  render() {
    return (
      <div className="App">
        {/* For Input Value to Change Direction & Content of Tooltip */}
        <div>
          {/* heading */}
          <div class="header-main-div"><p>Tool Tip</p></div>
          <div className="form-div">
            {/* For Input Value to that will appear on Tooltip */}
            <label className="form-label">Enter Content of Tooltip</label>
            <input
              type="text"
              className="form-control"
              onKeyUp={this.handleContentInput}
            />
          </div>
          <div className="form-div">
            {/* For Input Value to Change Direction & Content of Tooltip */}
            <label className="form-label">Enter Direction of Tooltip</label>
            <select
              className="form-select"
              onChange={this.handleDirectionInput}
            >
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>
        </div>

        {/* Tooltip */}
        <Tooltip content={this.state.content} direction={this.state.direction}>
          {/* calling button component */}
          <Button />
        </Tooltip>
      </div>
    );
  }
}