import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Question1 from './components/Question1'
import Question2 from './components/Question2'
import Question3 from './components/Question3'
import Question4 from './components/Question4'
import Disqualified from './components/Disqualified'
import Qualified from './components/Qualified'
import Passed from './components/Passed'


function App() {

 

  return (
    <BrowserRouter>
     
     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route path="/question1">
         <Question1/>
       </Route>
       <Route path="/question2">
         <Question2/>
       </Route>
       <Route path="/question3">
         <Question3/>
       </Route>
       <Route path="/question4">
         <Question4/>
       </Route>
       <Route path="/passed">
         <Passed/>
       </Route>
       <Route path="/disqualified">
         <Disqualified/>
       </Route>
       <Route path="/qualified">
         <Qualified/>
       </Route>
     </Switch>
     
    </BrowserRouter>
  );
}

export default App;
