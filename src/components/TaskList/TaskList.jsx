import React from 'react';
const TaskList = ()=>{
      return(
            <div id='tasklist' className='overflow-x-auto flex item-center justify-start gap-5 flex-nowrap w-full py-5 mt-10 h-[55%]'>
         <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                  <h3 className='px-3 py-1 rounded bg-red-600 text-sm '>High</h3>
                  <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, quaerat incidunt eligendi aut esse ducimus.</p>
         </div>

         <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                  <h3 className='px-3 py-1 rounded bg-red-600 text-sm '>High</h3>
                  <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, quaerat incidunt eligendi aut esse ducimus.</p>
         </div>

         <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                  <h3 className='px-3 py-1 rounded bg-red-600 text-sm '>High</h3>
                  <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, quaerat incidunt eligendi aut esse ducimus.</p>
         </div>

         <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                  <h3 className='px-3 py-1 rounded bg-red-600 text-sm '>High</h3>
                  <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, quaerat incidunt eligendi aut esse ducimus.</p>
         </div>
            </div>
      )
}
export default TaskList