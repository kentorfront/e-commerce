import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import './Register.css'
import { useDispatch } from 'react-redux';
import { setUsername, setEmail, setPassword } from '../redux/registerSlice';

export default function Register() {
    let [getData, setGetData] = useState([])
    let [passwordError, setPasswordError] = useState()
    let [EmailError, setEmailError] = useState()

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8080/users');
            setGetData(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []); 
      

    let [usernameStatus, setUsernameStatus] = useState(false)
    let [usernameError, setUsernameError] = useState('')

    let [eyes, setEyes] = useState(true)


    let [newUser, setNewUser] =  useState({
        username: '',
        password: '',
        email: '',
    })

    let dispatch = useDispatch()
    let navigate = useNavigate()


    let checkUsername = (value) => {
        let usernameLength = value.length;
        let checkedData = getData.filter((user) => user.username === value);
        setUsernameError('')
        
        if (usernameLength <= 5) {
            setUsernameStatus(false);
            setUsernameError('Username is too short');
        } else if (checkedData.length > 0) {
            setUsernameStatus(false);
            setUsernameError('Username already exists');
        } else {
            setUsernameStatus(true);
        }

    };
     

    let handleRegister = async () => {
        checkUsername(newUser.username)

        if (usernameStatus === true){
            try {
                const response = await axios.post('http://localhost:8080/register', newUser);
                let data = response.data
                localStorage.setItem("user", JSON.stringify({data}))
                navigate('/login')
              } 
    
            catch (error) {
                console.log(error.response.data);
                if (error.response.data === 'Password is too short') {
                    setPasswordError('Password is too short')
                } else if (error.response.data === ''){
                    setEmailError('Email already exists')
                }
              }
        } else{
            return 0
        }
        
    }

    return (
        <div className="LoginMain">
            <div className="UILogin">
                <h1>Register</h1>
                <div className="inputs">
                    <p className='error'>{usernameError}</p>

                    <input 
                        className="usernameInput" 
                        placeholder="Enter username" 
                        value={newUser.username} 
                        onChange={(e) => setNewUser({...newUser, username: e.target.value})}
                    />

                    <p className='error'>{passwordError}</p>

                    <div className='password'>
                        <input 
                            className="passwordInput"
                            type={eyes === false ? 'text' : 'password'} 
                            placeholder="Enter password" 
                            onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                        />

                        <button 
                            className='eyes' 
                            onClick={() => (setEyes(eyes === true ? false : true))}
                        >
                            {eyes === true ? <FaEye /> : <FaEyeSlash />}
                        </button>

                    </div>

                    <p className='error'>{EmailError}</p>
                    <input 
                        className="emailInput" 
                        placeholder="Enter email" 
                        onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                    />
                </div>
                <button className="submitButton" onClick={() => handleRegister()}>Register</button>
            </div>
            <div className="reg">
                Already have account? <Link to='/login'>Login</Link>  
            </div>
        </div>
    )
}

