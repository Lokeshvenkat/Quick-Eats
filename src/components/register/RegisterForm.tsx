"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, SetPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (firstName && lastName && emailAddress && password) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          firstName,
          lastName,
          userName: emailAddress,
          password,
        })
      );
      setMessage("Registration Successfull!");
      return;
    } else {
      setMessage("Please try again!");
      return;
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex justify-center items-cente"
      style={{ backgroundImage: "url('/home.jpg')" }}
    >
      {/* Right: Login Form */}
      <div className="bg-gray bg-opacity-90 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-600 drop-shadow-lg my-8">
          Welcome to Quick Eats
        </h1>
        <h1 className="text-2xl text-black text-center font-bold mb-4">
          Register
        </h1>
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-600 text-black"
            >
              First Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoComplete="off"
              className="w-full border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black"
              required
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-600 text-black"
            >
              Last Name
            </label>
            <input
              type="text"
              id="username"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              name="username"
              autoComplete="off"
              className="w-full border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black"
              required
            />
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-600 text-black"
            >
              Email Address
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              autoComplete="off"
              className="w-full border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
              autoComplete="off"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Register
          </button>
        </form>

        {/* Signup Link */}
        <div className="mt-6 text-blue-500 text-center">
          <Link href="./login" className="hover:underline">
            Already have an account? Login Here
          </Link>
        </div>
        <div>
          <p className="text-red-500 text-center">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
