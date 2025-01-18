import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LogInPage() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const logInEmployee = () => {
        if(userName === 'Admin' && password === 'admin') {
            navigate('/admin');
        } else {
            switch(userName) {
                case 'Employee1': {
                    if(password == 'employee') {
                        navigate(`/employee/${1}`)
                    } else {
                        alert('Invalid Password')
                    }
                    break;
                }
                case 'Employee2': {
                    if(password == 'employee') {
                        navigate(`/employee/${2}`)
                    } else {
                        alert('Invalid Password')
                    }
                    break;
                } 
                case 'Employee3': {
                    if(password == 'employee') {
                        navigate(`/employee/${3}`)
                    } else {
                        alert('Invalid Password')
                    }
                    break;
                } 
                default : {
                    alert('Incorrent UserName or Password');
                }
            }
        }
    }
  return (
    <div className='w-full h-screen bg-black flex items-center justify-center'>
        <div className='w-[30%] h-auto flex flex-col gap-10 p-14 border-2 border-green-500 rounded-xl'>
            <input type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder='Enter User Name'
            className='px-3 py-3 rounded-full border-none outline-none' 
            />
            <input type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password'
            className='px-3 py-3 rounded-full border-none outline-none' 
            />
            <button
            onClick={logInEmployee}
            className='text-white bg-green-500 py-3 rounded-full text-2xl font-medium'
            >Log In</button>
        </div>
    </div>
  )
}

export default LogInPage