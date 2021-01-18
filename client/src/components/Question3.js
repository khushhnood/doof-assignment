
import React, { Component } from "react";
import {withRouter} from 'react-router-dom'

class Question3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "Fanta",
      user : localStorage.getItem("user")
    };
  }

 

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };
  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    if(this.state.selectedOption==="Fanta"||this.state.selectedOption==="Mirinda"){
   // localStorage.setItem("answers",);
      this.props.history.push('/question4')

    }else{
      localStorage.clear();
      this.props.history.push('/disqualified');
    }
  
  };

  
  

  render() {
    
    return (
      <div className="container-fluid mt-5">
        <div className="container ml-auto">
          <h5> Employee : {this.state.user}</h5>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center mx-3 p-1" >
          <div className="p-2 bg-light" style={{border:"1px solid grey"}}>
          <div className="display-5">
            <h4>3.Which drink do you often order?</h4>
          </div>
          <div className="align-self-start">
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="questions"
                    value="Thumbs-up"
                    checked={this.state.selectedOption === "Thumbs-up"}
                    className="form-check-input"
                    onChange={this.handleOptionChange}
                  />
                  Thumbs Up
                </label>
              </div>

              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="questions"
                    value="Coca-Cola"
                    checked={this.state.selectedOption === "Coca-Cola"}
                    className="form-check-input"
                    onChange={this.handleOptionChange}
                  />
                  Coca-Cola
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="questions"
                    value="Mirinda"
                    checked={this.state.selectedOption === "Mirinda"}
                    className="form-check-input"
                    onChange={this.handleOptionChange}
                  />
                  Mirinda
                </label>
              </div>

              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="questions"
                    value="Fanta"
                    checked={this.state.selectedOption === "Fanta"}
                    className="form-check-input"
                    onChange={this.handleOptionChange}
                  />
                  Fanta
                </label>
              </div>

              
              <div className="form-group">
                <button className="btn btn-primary mt-2" type="submit">
                  Next 
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

export default withRouter(Question3);

