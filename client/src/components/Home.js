import React from 'react'
import {useState,useEffect} from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function Home() {
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [passed,setPassed] = useState([]);
    const history = useHistory();

    useEffect(()=>{
      const fetchdata = async()=>{
        const fetched = await axios.get('/passed');
        if(fetched){
          setPassed(fetched.data.employees);
        }
      }
      fetchdata();
    },[])
    
    const count = passed.length ;

    const handleSubmit = async (submitEvent) => {
      try {
        submitEvent.preventDefault();
        const newEmployee = await axios.post("/employees", {
          name: fname + " " + lname,
        });
        if (newEmployee) {
          localStorage.setItem("user", newEmployee.data.employee.name);
          localStorage.setItem("userId",newEmployee.data.employee._id)
          history.push("/question1");
        }else{
          console.log("eroror")
        }
      } catch (error) {
        console.log(error);
      }
    };
    return (
      
      <div>
        
        <div className="container"><p>EMPLOYEES PASSED : {passed.length}/50</p></div>
        <div className="container m-5  d-flex align-items-center justify-content-center">
          <Form onSubmit={submitEvent=>handleSubmit(submitEvent)}>
            <Form.Group controlId="formBasicText">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text" required
                placeholder="Enter First Name"
                onChange={(e) => setFname(e.target.value)}
                value={fname}
              />
            </Form.Group>

            <Form.Group controlId="formBasicText">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text" required
                placeholder="Enter last Name"
                onChange={(e) => setLname(e.target.value)}
                value={lname}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onSubmit={handleSubmit}>
              Next
            </Button>
          </Form>
        </div>
      </div>
    );
}

export default Home
