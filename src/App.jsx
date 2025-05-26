import React, { useState,useEffect, useContext } from 'react';

import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
import Header from './components/Other/Header.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx';
import { getLocalStorage, setLocalStorage } from './utils/localStorage.jsx';
import { AuthContext } from './context/AuthProvider.jsx';


const App=()=>{
 const [user, setUser] = useState(null)

 const handleLogin = (email,password)=>{
if(email == 'admin@me.com' && password == '123'){
  setUser('admin')
}else if(email == 'user@me.com' && password == '123'){
  setUser('employee')
}else{
  alert('invalid credentials');
}
 }
 const data = useContext(AuthContext)
console.log(data);

  // useEffect(()=>{
  //   setLocalStorage()
  //   getLocalStorage()
  // })

  return(
   <>
   {!user ? <Login handleLogin={handleLogin}/>: null}
   {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
{/* <EmployeeDashboard></EmployeeDashboard> */}
{/* <AdminDashboard></AdminDashboard> */}
   </>
  )
}
export default App;