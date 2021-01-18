import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Passed() {
    const [pass,setPass] = useState([]);
    useEffect(()=>{
           const fetchall = async()=>{
               try {
                   const passed = await axios.get('/passed');
                   if(passed){
                       if(passed.data.employees.length<21){
                        setPass(passed.data.employees);
                       }else{
                           const top = passed.data.employees.slice(0,20);
                           setPass(top)
                       }
                       
                       console.log(passed)
                   }
               } catch (error) {
                   console.log(error)
               }
           }
           fetchall();
    },[])

    
    return (
        <div className="container">
            <div className="container-fluid">
                <h2>Passed Employees</h2>
            </div>
            <div className="container d-flex flex-column align-items-center justify-content-center m-2 p-1">
                {pass.map((item,index)=>(
                    <div key={index} className="container">
                        <div className="container-fluid">
                            <p>{index+1}.{item.qualified.name}</p>
                        </div>
                        <div className="container-fluid">
                            <h6>Answer:</h6>
                            <p>{item.qualified.answers}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Passed
