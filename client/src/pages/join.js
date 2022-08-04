import React, { Component } from "react";
import { withRouter } from "react-router-dom";

const initialState = {
  name: "",
  room: "",
};

class Join extends Component {
  constructor() {
    super();
    this.state = {
      ...initialState,
    };
  }

  clearForm() {
    this.setState({
      ...initialState,
    });
  }

  inputUpdate(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  join() {
    const { name, room } = this.state;
    if (name && room) {
      this.props.history.push(`/chat/${name}/${room}`);
    }
  }

  render() {
    const { name } = this.state;

    return (
      <div className="joinForm">
        <div className="form_wrap">
          <div className="form_row">
            <div className="form_item">
              <div className="form_input">
                <input
                  type="text"
                  placeholder="Full Name"
                  autoComplete="off"
                  name="name"
                  value={name}
                  onChange={this.inputUpdate.bind(this)}
                />
                <span className="bottom_border"></span>
              </div>
            </div>
          </div>
          <div className="form_row">
            <div className="form_item">
              <div className="form_select">
                <select name="room" onChange={this.inputUpdate.bind(this)}>
                  <option value="">Please select a group</option>
                  <option value="Group 1">Group 1</option>
                  <option value="Group 2">Group 2</option>
                  <option value="Group 3">Group 3</option>
                  <option value="Group 4">Group 4</option>
                  <option value="Group 5">Group 5</option>
                  <option value="Group 6">Group 6</option>
                  <option value="Group 7">Group 7</option>
                  <option value="Group 8">Group 8</option>
                  <option value="Group 9">Group 9</option>
                  <option value="Group 10">Group 10</option>
                  <option value="Group 11">Group 11</option>
                  <option value="Group 12">Group 12</option>
                  <option value="Group 13">Group 13</option>
                  <option value="Group 14">Group 14</option>
                  <option value="Group 15">Group 15</option>
                  <option value="Group 16">Group 16</option>
                  <option value="Group 17">Group 17</option>
                  <option value="Group 18">Group 18</option>
                  <option value="Group 19">Group 19</option>
                  <option value="Group 20">Group 20</option>
                </select>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
          </div>
          <div className="form_buttons">
            <button onClick={() => this.join()} className="btn">
              Join
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Join);
