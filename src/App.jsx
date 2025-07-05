import React, { useState,useEffect, useContext } from 'react';
import './App.css';
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
// import Header from './components/Other/Header.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx';
import { getLocalStorage, setLocalStorage } from './utils/localStorage.jsx';
import { AuthContext } from './context/AuthProvider.jsx';



const App=()=>{
 const [user, setUser] = useState();
 const [loggedInUserData, setLoggedInUserData] = useState(null);
 const authData = useContext(AuthContext);
 const [userData,SetUserData] = useContext(AuthContext)

useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser')
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    console.log(userData);
    setUser(userData.role)
    setLoggedInUserData(userData.data)
  }

},[])


 const handleLogin = (email, password)=>{
  if(email == 'admin@me.com' && password == '123'){
    setUser('admin')
    localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
  }
  else if(userData){
    const employee = userData.employee.find((e)=> email == e.email && e.password == password )
    if(employee){
    setUser('employee')
    setLoggedInUserData(employee)
    localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: 'employee'}))
    }
    
  }
  else{
    alert("invalid Credential")
  }
 }




// useEffect(()=>{
//   setLocalStorage()
//   getLocalStorage()

// })


return(
  <>
  {!user ? <Login handleLogin={handleLogin}></Login> : ""}
  {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
  </>
)
}
export default App;


