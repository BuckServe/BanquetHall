import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/api/authApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [login, { isLoading, error, data }] = useLoginMutation();
  const {
    isAuthenticated,
    user,
    isLoading: userLoading,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin");
    }

    if (error) {
      toast.error(error?.data?.message);
    }
  }, [error, isAuthenticated, navigate, user]);

  const submitHandler = (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    login(loginData);
  };

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-4 py-6 bg-gradient-to-r from-blue-50 to-purple-50">
       
          <form onSubmit={submitHandler}>
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">login</h2>

            <div className="mb-6">
              <label
                htmlFor="email_field"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                email
              </label>
              <input
                type="email"
                id="email_field"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password_field"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                password
              </label>
              <input
                type="password"
                id="password_field"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>

            {/* <div className="flex justify-between items-center mb-6">
              <a
                href="/password/forgot"
                className="text-sm text-blue-600 hover:underline"
              >
                forgetPassword
              </a>
            </div> */}

            <button
              id="login_button"
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? 'authenticating' : 'login'}
            </button>
          </form>
      </div>
    </>
  );
};

export default Login;