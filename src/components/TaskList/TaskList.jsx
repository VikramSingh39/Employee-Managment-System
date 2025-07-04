import React from 'react';
import AcceptedTask from './AcceptedTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({data})=>{
      return(
            <div id='tasklist' className='overflow-x-auto flex item-center justify-start gap-5 flex-nowrap w-full py-4 mt-10 h-[55%] mx-auto '>
         {data.tasks.map((elem, id)=>{
            if(elem.active){
                  return <AcceptedTask data={data} key={id}/>
            }
            if(elem.newTask){
                  return <NewTask key={id}/>
            }
            if(elem.completed){
                  return <CompleteTask key={id}/>
            }
            if(elem.failed){
                  return <FailedTask key={id}/>
            }
         })}
      </div>
      )
}
export default TaskList