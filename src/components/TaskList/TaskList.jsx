import React from 'react';
import AcceptedTask from './AcceptedTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({data})=>{
      return(
            <div id='tasklist' className='overflow-x-auto flex item-center justify-start gap-5 flex-nowrap w-full py-4 mt-10 h-[55%] mx-auto '>
         {data?.tasks?.map((elem, id)=>{
            if(elem.active){
                  return <AcceptedTask data={elem} key={id}/>
            }
            if(elem.newTask){
                  return <NewTask key={id} data={elem}/>
            }
            if(elem.completed){
                  return <CompleteTask key={id} data={elem}/>
            }
            if(elem.failed){
                  return <FailedTask key={id} data={elem}/>
            }
         })}
      </div>
      )
}
export default TaskList