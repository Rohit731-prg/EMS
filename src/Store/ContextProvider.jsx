import React, { useState } from 'react'
import { UserContext } from './UserContext';

function ContextProvider({children}) {
    const [empDetails, setEmpDetails] = useState([
        {
            id: 1,
            empName: 'Arjun Sharma',
            newTask: 0,
            acttask: 0,
            completedTask: 0,
            failed: 0
        },
        {
            id: 2,
            empName: 'Ankit Paliwal',
            newTask: 0,
            acttask: 0,
            completedTask: 0,
            failed: 0
        },
        {
            id: 3,
            empName: 'Shuvham Gupta',
            newTask: 0,
            acttask: 0,
            completedTask: 0,
            failed: 0
        }
    ]);

    const [taskList, setTaskList] = useState({
        employee1: [],
        employee2: [],
        employee3: [],
    });
  return (
    <UserContext.Provider 
    value={{empDetails, setEmpDetails, taskList, setTaskList}}>
        {children}
    </UserContext.Provider>
  )
}

export default ContextProvider