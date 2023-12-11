import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  })

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', inputs);
      navigate('/');
    } catch (err) {
      setError(err.response.data)
    }

  }

  console.log(inputs);
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input onChange={handleChange} name="username" required type='text' placeholder='username' />
        <input onChange={handleChange} name="email" required type='email' placeholder='email' />
        <input onChange={handleChange} name="password" required type='password' placeholder='password' />
        <button onClick={handleSubmit}>Register</button>
        {
          error && <p>{error}</p>
        }
        <span>
          Do you have an account? <Link to='/login'>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
