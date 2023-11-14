import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
        const body = {
            "email": username,
            "password": password
        }
        const result = await axios.post("https://hells-kitchen.onrender.com/api/v1/login", body)
        
        const status = result.status
        if (status === 200) {
            navigate('/')
        }
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="w-full max-w-lg border border-gray-600 p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>
        <form className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-1 text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="px-3 py-2 bg-gray-900 rounded-md outline-none border-gray-800 border-2 border-solid text-gray-300 focus:border-gray-600"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-2 bg-gray-900 rounded-md outline-none border-gray-800 border-2 border-solid text-gray-300 focus:border-gray-600"
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
