
import React, { Component } from "react";
import {withRouter} from 'react-router-dom'

class Question1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "Home",
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
    if(this.state.selectedOption==="Delivery"){
      //localStorage.setItem("answers",{...this.state.selectedOption});
      this.props.history.push('/question2')

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
            <h4>1. Where do you eat often?</h4>
          </div>
          <div className="align-self-start">
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="questions"
                    value="Home"
                    checked={this.state.selectedOption === "Home"}
                    className="form-check-input"
                    onChange={this.handleOptionChange}
                  />
                  Home
                </label>
              </div>

              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="questions"
                    value="Dine-in"
                    checked={this.state.selectedOption === "Dine-in"}
                    className="form-check-input"
                    onChange={this.handleOptionChange}
                  />
                  Dine-in
                </label>
              </div>

              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="questions"
                    value="Delivery"
                    checked={this.state.selectedOption === "Delivery"}
                    className="form-check-input"
                    onChange={this.handleOptionChange}
                  />
                  Delivery
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

export default withRouter(Question1);