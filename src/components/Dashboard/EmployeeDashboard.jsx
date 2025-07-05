import React from "react";
import Header from "../Other/Header";
import TaskListNumber from "../Other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props)=>{

      return(
            <div>
                  <div className="p-10 bg-[#1c1c1c] h-screen">
               <Header changeUser={props.changeUser} data={props.data}></Header>   
               <TaskListNumber data={props.data}></TaskListNumber>  

               <TaskList data={props.data}></TaskList>    
                  </div>
            </div>
      )
}
export default EmployeeDashboard;