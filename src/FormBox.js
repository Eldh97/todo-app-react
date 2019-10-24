import React, { Component } from "react";
import "./FormBox.scss";
class FormBox extends Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ todo: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.add(this.state.todo);
    this.setState({ todo: "" });
  }
  render() {
    return (
      <div className="FormBox" onSubmit={this.handleSubmit}>
        <form className="FormBox-form">
          <label className="FormBox-label" htmlFor="todo">
            New Todo
          </label>
          <div className="center">
            <input
              className="FormBox-input"
              type="text"
              placeholder="write your todo"
              id="todo"
              onChange={this.handleChange}
              value={this.state.todo}
            />
            <button className="FormBox-btn">Add Todo</button>
          </div>
        </form>
      </div>
    );
  }
}
export default FormBox;
