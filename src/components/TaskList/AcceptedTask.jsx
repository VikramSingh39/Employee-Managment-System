import React from 'react'

const AcceptedTask = ({data}) => {
  console.log(data.tasks.title);
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                  <h3 className='px-3 py-1 rounded bg-red-600 text-sm '>High</h3>
                  <h4 className='text-sm'>20 Feb 2025</h4>
            </div>
           {data.tasks.map((elem)=>{
            <h2 className='mt-5 text-2xl font-semibold'>{elem.title}</h2>
         })}
            
            <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, quaerat incidunt eligendi aut esse ducimus.</p>

            <div className='my-2 flex gap-2.5'>
                <button className='bg-green-500 py-1 px-2 text-sm rounded cursor-pointer'>Mark as completed</button>
                <button className='bg-purple-500 py-1 px-2 text-sm rounded cursor-pointer'>Mark as failed</button>
            </div>
         </div>
  )
}

export default AcceptedTask;
