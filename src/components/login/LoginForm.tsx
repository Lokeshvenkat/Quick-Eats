"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = localStorage.getItem("user");
    if (!user) {
      setMessage("User not found! Please register first.");
      return;
    }
    const { userName: storedUserName, password: storedPassword } =
      JSON.parse(user);

    if (storedUserName === userName && storedPassword === password) {
      setMessage("Login Successfull!");
       setTimeout(() => {
    router.push("/main");
  }, 1000);
    } else {
      setMessage("Invalid User Name or Password");
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: "url('/home.jpg')" }}
    >
      {/* Login Form Card */}
      <div className="bg-grey bg-opacity-90 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-blue-600 drop-shadow my-6">
          Welcome to Quick Eats
        </h1>

        <h2 className="text-2xl text-black font-semibold mb-6 text-center">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="mr-2"
            />
            <label htmlFor="remember" className="text-gray-600">
              Remember Me
            </label>
          </div>

          {/* Forgot Password */}
          <div className="mb-6">
            <a href="#" className="text-sm  text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="mt-6 text-center text-sm text-blue-600">
          Don’t have an account?{" "}
          <Link href="/register" className="hover:underline font-medium">
            Sign up here
          </Link>
        </p>
        <div>
          <p className="text-red-500 text-center">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
