import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../Store/UserContext';

function Employee() {
  const id = useParams();
  const navigate = useNavigate();
  
  const { empDetails, setEmpDetails, taskList, setTaskList } = useContext(UserContext);

  const compliteTask = (TaskName) => {
    const updatedTask = taskList[`employee${id.id}`].filter((task) => task.taskTitle !== TaskName);
    setTaskList((prev) => ({
      ...prev,
      [`employee${id.id}`]: updatedTask
    }))
    setEmpDetails((prev) =>
      prev.map((emp) =>
        String(emp.id) === id.id
          ? { ...emp, newTask: emp.newTask - 1, completedTask: emp.completedTask + 1 }
          : emp
      )
    );
  }

  const failedTask = (TaskName) => {
    const updatedTask = taskList[`employee${id.id}`].filter((task) => task.taskTitle !== TaskName);
    setTaskList((prev) => ({
      ...prev,
      [`employee${id.id}`]: updatedTask
    }))
    setEmpDetails((prev) =>
      prev.map((emp) =>
        String(emp.id) === id.id
          ? { ...emp, newTask: emp.newTask - 1, failed: emp.failed + 1 }
          : emp
      )
    );
  }

  return (
    <div className='w-full h-full bg-black px-20 py-10'>
      <p className='text-white text-4xl font-semibold'>Hellow 👋</p>
        <div className='w-full h-auto flex flex-row justify-between mt-5 font-bold'>
            <p className='text-white text-4xl '>{id.id == 1 ? 'Arjun Sharma' : id.id == 2 ? 'Ankit Paliwal' : 'Shuvham Gupta'}</p>
            <button
            onClick={() => navigate('/')}
            className='px-5 py-3 rounded-lg bg-green-500 text-white text-2xl font-medium border-none outline-none'
            >Log Out</button>
        </div>
        <div className='w-full h-auto flex flex-row justify-between items-center mt-20 gap-5'>
            <div className='w-1/4 h-auto bg-blue-400 rounded-lg p-10'>
              <p className='mb-5 text-white text-4xl font-medium'>{empDetails[id.id - 1].newTask}</p>
              <p className='text-white text-2xl font-medium '>New Task</p>
            </div>
            <div className='w-1/4 h-auto bg-green-400 rounded-lg p-10'>
              <p className='mb-5 text-white text-4xl font-medium'>{empDetails[id.id - 1].acttask}</p>
              <p className='text-white text-2xl font-medium '>Active Task</p>
            </div>
            <div className='w-1/4 h-auto bg-yellow-400 rounded-lg p-10'>
              <p className='mb-5 text-white text-4xl font-medium'>{empDetails[id.id - 1].completedTask}</p>
              <p className='text-white text-2xl font-medium '>Complite Task</p>
            </div>
            <div className='w-1/4 h-auto bg-pink-400 rounded-lg p-10'>
              <p className='mb-5 text-white text-4xl font-medium'>{empDetails[id.id - 1].failed}</p>
              <p className='text-white text-2xl font-medium '>Failed Task</p>
            </div>
        </div>
        <div className='w-full h-auto mt-40 flex flex-row overflow-x-auto gap-10 wrapper no-scrollbar'>
            {taskList[`employee${id.id}`].map((tasks, index) => (
              <div 
              key={index} 
              className='w-1/3 h-[400px] p-10 rounded-lg bg-pink-400'>
                <div className='w-full h-auto flex flex-row justify-between mb-5'>
                    <p className='text-white font-medium p-2 bg-red-600 rounded-md'>{tasks.category}</p>
                    <p className='text-white font-normal'>{tasks.taskDate}</p>
                </div>
                <p className='text-white font-semibold text-3xl'>{tasks.taskTitle}</p>
                <p className='text-white font-medium text-2xl mt-5'>{tasks.taskDesc}</p>
                <div className='w-full h-auto flex flex-row justify-between mt-10'>
                  <button onClick={() => compliteTask(tasks.taskTitle)}
                  className='hover:shadow-xl bg-red-400 px-5 py-2 text-white font-medium rounded-md'
                  >Mark as Complete</button>
                  <button
                  onClick={() => failedTask(tasks.taskTitle)}
                  className='hover:shadow-xl bg-green-400 px-5 py-2 text-white font-medium rounded-md'
                  >Mark as Failed</button>
                </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Employee