import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MdPassword, MdMail } from 'react-icons/md';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useCheckLogging from '../HOC/useCheckLogging';

export default function Login(){

    useCheckLogging()
    
    let [newUser, setNewUser] = useState({
        email: '',
        password: '',
    })

    let [eyes, setEyes] = useState(false)

    let navigate = useNavigate()

    let handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/login', newUser);
            let data = response.data
            let user = {
                username: data.user.username,
                email: data.user.email,
                id: data.user.id,
            }
            
            localStorage.setItem("user", JSON.stringify(user))

            navigate('/')
          } 

        catch (error) {
            console.error('Error', error);
          }
    }

    return (
        <>
            <Header />
            <section className="Register">
                <div className="register-content">
                    <div className="register-title">
                        Get started for free
                    </div>
                    <div className="error">
                        
                    </div>
                    <div className="inputs">
                        <div className="email-container container">
                            <MdMail className="abs-pos-icon" />
                            <input
                                type="email"
                                className="email-input"
                                placeholder="Enter your email address"
                                value={newUser.email}
                                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                            />
                        </div>
                        <div className="password-container container">
                            <MdPassword className="abs-pos-icon" />
                            <input
                                type={eyes ? 'password' : 'text'}
                                className="password-input"
                                placeholder="Enter your password"
                                value={newUser.password}
                                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                            />
                            <button
                                className='eyes'
                                onClick={() => setEyes(!eyes)}>
                                {eyes ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </div>
                    </div>
                    <button className="registerButton" onClick={handleLogin}>Register</button>
                    <div className="login-reNavigate">Doesn't have an account? <Link to="/register">Register</Link></div>
                </div>
            </section>
            <Footer />
        </>
    )
}