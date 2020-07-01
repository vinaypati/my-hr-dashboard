import React, { useContext, useState, useEffect } from 'react'
import {EmployeeContext,Employee} from '../contexts/Employees';
import EmployeeData from './EmployeeData';
import './App.css';
import userAuthentication from '../contexts/Authentication';

// TODO: import the EmployeeContext object to be used with the `useContext hook
// TODO: import your custom `useAuthentication` hook

const App: React.FunctionComponent = () => {
  // TODO: use the EmployeeContext shared state to access the array
  // of employees from the API call

  let { employees } = useContext(EmployeeContext);
  const [disableSort, setDisableSort] = useState<boolean>();
  const listElements = <EmployeeData disable={disableSort}  data={employees} />
  const [userData, setUserData] = useState<string|null>();
  
  useEffect(() => login() , [])
  //Added the token while login

  function login(){
    let userData1 = userAuthentication('login')
    setUserData(userData1)
  }
  //removed the token from session storage using authentication hook
  function logout(){
  let userData= userAuthentication('logout');
  setUserData(userData);
   }

  // TODO: Use your custom authentication hook to receive the tokenized
  // identity from session storage and have a button for "logging out"

  //TODO: implement sorting logic for the employees array
  // provided by the context consumption to sort by emplyee nanme.
  // This should be accompanied by a componet or button designated
  // for activating and deactivvating the sorting

  return (
    
          <div style={rootStyle}>
    <div  style={{float:'right'}}>  <button  type="button"   onClick={() => logout()} > Logout </button></div>
       
      <h3>Active User</h3>
      {
      /*
        TODO: display the found tokenized identity from your custom hook
      */
        /* added the tockenized data */
     <div>
   { userData }
</div>
      }

      <h2>List of Employees</h2>
      {/*
        TODO: create React component to cleanly display the employee
        entities that are received from the API call that you've implemented
        and provided via shared context
        /*
       Created the New Component EmployeeData for clean code
      */
     <React.Fragment>
      
     <button  type="button"  onClick={() => disableSort?setDisableSort(false):setDisableSort(true)} > Sort Disable/Enable </button>
           
           {listElements}
           
        
       </React.Fragment>
      }
    </div>
  );
}

const rootStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

export default App;
