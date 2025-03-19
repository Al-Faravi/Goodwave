import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import 'react-toastify/dist/ReactToastify.css';
import "./Form.css"; 

const Signup = () => {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: '',
        skills: '',
        causesSupported: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo((prev) => ({
            ...prev,
            [name]: name === 'skills' || name === 'causesSupported' 
                ? value.split(',').map(item => item.trim())  // Split the input into an array and trim spaces
                : value
        }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password, skills, causesSupported } = signupInfo;

        if (!name || !email || !password || skills.length === 0 || causesSupported.length === 0) {
            return handleError('Name, email, password, skills, and causes supported are required.');
        }

        try {
            const url = `http://localhost:8080/auth/signup`;  // Local API endpoint
            const response = await fetch(url, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(signupInfo)
            });

            const result = await response.json();
            const { success, message, error } = result;

            if (success) {
                handleSuccess(message);
                setTimeout(() => navigate('/login'), 1000);
            } else {
                handleError(error?.details?.[0]?.message || message);
            }
        } catch (err) {
            handleError(err.message);
        }
    };

    return (
        <div className='signup-form-container'>
            <h1>Signup</h1>
            <form onSubmit={handleSignup} className='signup-form'>
                <div className='signup-form-field'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        name='name'
                        placeholder='Enter your name...'
                        value={signupInfo.name}
                        onChange={handleChange}
                        autoFocus
                    />
                </div>
                <div className='signup-form-field'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter your email...'
                        value={signupInfo.email}
                        onChange={handleChange}
                    />
                </div>
                <div className='signup-form-field'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        placeholder='Enter your password...'
                        value={signupInfo.password}
                        onChange={handleChange}
                    />
                </div>
                <div className='signup-form-field'>
                    <label htmlFor='skills'>Skills (comma-separated)</label>
                    <input
                        type='text'
                        name='skills'
                        placeholder='Enter your skills (comma-separated)...'
                        value={signupInfo.skills}
                        onChange={handleChange}
                    />
                </div>
                <div className='signup-form-field'>
                    <label htmlFor='causesSupported'>Causes Supported (comma-separated)</label>
                    <input
                        type='text'
                        name='causesSupported'
                        placeholder='Enter causes you support (comma-separated)...'
                        value={signupInfo.causesSupported}
                        onChange={handleChange}
                    />
                </div>
                <button type='submit' className='signup-form-button'>Signup</button>
                <span className='signup-form-link'>Already have an account?
                    <Link to="/login"> Login</Link>
                </span>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Signup;
