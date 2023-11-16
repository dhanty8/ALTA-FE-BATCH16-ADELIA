import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { postLogin, postRegister } from "../../utils/apis/auth/api";

import { RegisterBody } from "../../utils/apis/auth/types";

const Register = () => {
  const navigate = useNavigate();
  const [dataRegister, setDataRegister] = useState<RegisterBody>({
    full_name: "",
    email: "",
    password: "",
    role: "user",
    address: "",
    phone_number: "",
  });

  const handleRegister = async () => {
    try {
      const result = await postRegister(dataRegister);

      if (result.message) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="w-full max-w-lg border border-gray-600 p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-white">Register</h2>
        <form className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="full_name" className="mb-1 text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              value={dataRegister.full_name}
              onChange={(e) =>
                setDataRegister({
                  ...dataRegister,
                  full_name: e.target.value,
                })
              }
              className="px-3 py-2 bg-gray-900 rounded-md outline-none border-gray-800 border-2 border-solid text-gray-300 focus:border-gray-600"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-1 text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="username"
              value={dataRegister.email}
              onChange={(e) =>
                setDataRegister({
                  ...dataRegister,
                  email: e.target.value,
                })
              }
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
              value={dataRegister.password}
              onChange={(e) =>
                setDataRegister({
                  ...dataRegister,
                  password: e.target.value,
                })
              }
              className="px-3 py-2 bg-gray-900 rounded-md outline-none border-gray-800 border-2 border-solid text-gray-300 focus:border-gray-600"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" className="mb-1 text-gray-300">
              Address
            </label>
            <textarea
              id="address"
              value={dataRegister.address}
              onChange={(e) =>
                setDataRegister({
                  ...dataRegister,
                  address: e.target.value,
                })
              }
              className="px-3 py-2 bg-gray-900 rounded-md outline-none border-gray-800 border-2 border-solid text-gray-300 focus:border-gray-600"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone_number" className="mb-1 text-gray-300">
              Phone Number
            </label>
            <input
              type="text"
              id="phone_number"
              value={dataRegister.phone_number}
              onChange={(e) =>
                setDataRegister({
                  ...dataRegister,
                  phone_number: e.target.value,
                })
              }
              className="px-3 py-2 bg-gray-900 rounded-md outline-none border-gray-800 border-2 border-solid text-gray-300 focus:border-gray-600"
            />
          </div>
          <Link to={'/login'} className="text-gray-300">Already register ? Login</Link>
          <button
            type="button"
            onClick={handleRegister}
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
