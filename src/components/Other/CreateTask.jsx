import React from 'react';
const CreateTask = ()=>{
      return(
            <div className=''>
            <form className='flex w-full flex-wrap
            bg-yellow-00 items-start justify-between '>
                  <div className='w-1/2'>
                  <div><h3 className='text-sm mb-1'>Task Title</h3></div>
                  <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='make a UI Design' />
                  <div><h3 className='mb-1 text-sm mt-1.5'>Date</h3>
              <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="date" /></div>

              <div><h3 className='mb-1 text-sm mt-1.5'>Assign to</h3>
              <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='employee name' /></div>

              <div><h3 className='mb-1 text-sm mt-1.5'>Category</h3>
              <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='design, dev & etc' /></div>
                  </div>

             <div className='w-2/5 flex flex-col items-start mt-1.5'><h3 className='mb-1 text-sm'>Description</h3>
             <textarea name="" className='h-44 text-sm py-2 px-4 w-full rounded outline-none bg-transparent border-[1px]' ></textarea>
             <button className='bg-emerald-500 py-2.5 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full text-white '>Create Task</button>
             </div>

            </form>
      </div>
      )
}
export default CreateTask