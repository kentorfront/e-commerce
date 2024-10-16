import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { MdMail, MdPassword } from "react-icons/md";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Register.css";
import { setUser } from "../redux/registerSlice";

export default function Register() {
    let [newUser, setNewUser] = useState({
        username: '',
        password: '',
        email: '',
    });

    let [error, setError] = useState({
        passwordError: '',
        emailError: '',
        usernameError: '',
        generalError: '',
    });

    

    let [getData, setGetData] = useState('');
    let [eyes, setEyes] = useState(true);
    let dispatch = useDispatch();
    let navigate = useNavigate();

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

    let handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:8080/register', newUser);
            dispatch(setUser(newUser));
            localStorage.setItem("user", JSON.stringify(response.data));
            navigate('/login');
        } catch (error) {
            if (error.response.data.includes('Password' || 'password')) {
                setError({ ...error, passwordError: error.response.data });
            } else if (error.response.data.includes('Email' || 'email')) {
                setError({ ...error, emailError: error.response.data });
            } else if (getData.filter((user) => user.username === newUser.username) !== '' || null) {
                setError({ ...error, usernameError: 'Username already exists' });
            } else {
                setError({ ...error, generalError: 'An unexpected error occurred' });
            }
        }
    };

    return (
        <>
            <Header />
            <section className="Register">
                <div className="register-content">
                    <div className="register-title">
                        Get started for free
                    </div>
                    <div className="error">
                        {error.passwordError && <p>{error.passwordError}</p>}
                        {error.emailError && <p>{error.emailError}</p>}
                        {error.usernameError && <p>{error.usernameError}</p>}
                        {error.generalError && <p>{error.generalError}</p>}
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
                        <div className="username-container container">
                            <FaUser className="abs-pos-icon" />
                            <input
                                type="text"
                                className="username"
                                placeholder="Enter your username"
                                value={newUser.username}
                                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                            />
                        </div>
                    </div>
                    <button className="registerButton" onClick={handleRegister}>Register</button>
                    <div className="login-reNavigate">Already have an account? <Link to="/">Login</Link></div>
                </div>
            </section>
            <Footer />
        </>
    );
}
