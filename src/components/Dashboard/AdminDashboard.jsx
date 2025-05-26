import React from 'react';
import Header from '../Other/Header';
import CreateTask from '../Other/CreateTask';
import AllTask from '../Other/AllTask';

const AdminDashboard = ()=>{
      return (
            <div className='h-screen w-full p-10'>
                  <Header></Header>
                  <CreateTask></CreateTask>
                  <AllTask></AllTask>
            </div>
      )
}
export default AdminDashboard 