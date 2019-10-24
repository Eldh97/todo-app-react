import React from "react";
import IcoMoon from "react-icomoon";
import "./Todo.scss";
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      editedTerm: this.props.name,
      done: false,
      deleted: false
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.done = this.done.bind(this);
  } 

  handleEdit() {
    this.setState({ edit: true });
  }
  handleRemove() {
    this.props.remove(this.props.id);
    this.setState({ deleted: true });
  }
  handleSave(evt) {
    evt.preventDefault();
    this.props.save(this.props.id, this.state.editedTerm);
    this.setState({ edit: false });
  }
  done() {
    this.setState(st => ({ done: !st.done }));
  }
  renderItem() {
    if (!this.state.edit)
      return (
        <div className="Todo-unedited">
          <div
            className={
              this.state.done ? "Todo-unedited-name-done" : "Todo-unedited-name"
            }
            onClick={this.done}
          >
            {" "}
            {this.props.name}
          </div>
          <div className="Todo-unedited-options">
            <IcoMoon
              icon="pencil"
              className="Todo-unedited-icon Todo-unedited-icon-edit"
              onClick={this.handleEdit}
            />
            <IcoMoon
              icon="bin2"
              className="Todo-unedited-icon Todo-unedited-icon-remove"
              onClick={this.handleRemove}
            />
          </div>
        </div>
      );
    else
      return (
        <form className="Todo-edited" onSubmit={this.handleSave}>
          <input
            type="text"
            className="Todo-edited-input"
            value={this.state.editedTerm}
            onChange={evt => this.setState({ editedTerm: evt.target.value })}
          />
          <button className="Todo-edited-btn">Save</button>
        </form>
      );
  }
  render() {
    return (
      <div className={this.state.deleted ? "Todo-deleted" : "Todo"}>
        {this.renderItem()}
      </div>
    );
  }
}
export default Todo;
