
const TaskListNumber = ({data})=>{
      return(
            <div className='flex flex-wrap justify-between mt-10 gap-5 screen'>
            <div className='rounded-xl w-[45%] bg-red-400 px-9 py-6'>
                  <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
                  <h3 className='text-xl font-medium'>New Task</h3>
            </div>

            <div className='rounded-xl w-[45%] bg-blue-400 px-9 py-6'>
                  <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
                  <h3 className='text-xl font-medium'>Accepted Task</h3>
            </div>

            <div className='rounded-xl w-[45%] bg-green-400 px-9 py-6'>
                  <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
                  <h3 className='text-xl font-medium'>Completed Task</h3>
            </div>

            <div className='rounded-xl w-[45%] bg-yellow-400 px-9 py-6'>
                  <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
                  <h3 className='text-xl font-medium'>Failed Task</h3>
            </div>
            </div>
      )
}
export default TaskListNumber;