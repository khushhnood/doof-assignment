
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Question4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: " ",
      user: localStorage.getItem("user"),
      userId: localStorage.getItem("userId"),
    };
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value,
    });
  };
  handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();

    localStorage.setItem("answers", this.state.selectedOption);
    const answers = localStorage.getItem("answers");

    const userId = this.state.userId;

    const upload = axios.put(`/employees/qualified/${userId}`, {
      answers: answers,
    });

    if (upload) {
      localStorage.clear();
      this.props.history.push("/qualified");
    } else {
      console.log("error");
    }
  };

  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="container ml-auto">
          <h5> Employee : {this.state.user}</h5>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center mx-3 p-1">
          <div className="p-2 bg-light" style={{ border: "1px solid grey" }}>
            <div className="display-5">
              <h4>
                3.What do you liked about the drink you selected in previous
                question?
              </h4>
            </div>
            <div className="align-self-start">
              <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                  <label>Answer :</label>
                  <div className="form-control">
                  <input
                    style={{border:"none",width:"100%"}}
                    type="text" required
                    name="questions"
                    value={this.state.selectedOption}
                    onChange={this.handleOptionChange}
                  />
                  </div>
                 
                </div>

                <div className="form-group">
                  <button className="btn btn-primary mt-2" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Question4);


