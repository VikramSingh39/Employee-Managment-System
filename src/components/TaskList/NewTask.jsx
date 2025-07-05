import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                  <h3 className='px-3 py-1 rounded bg-red-600 text-sm '>{data.category}</h3>
                  <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>{data.description}</p>

            <div className='my-2 flex gap-2.5'>
                <button className='bg-green-500 py-1 px-2 text-sm rounded cursor-pointer'>Notify Admin</button>
                </div>
                
         </div>
  )
};

export default NewTask