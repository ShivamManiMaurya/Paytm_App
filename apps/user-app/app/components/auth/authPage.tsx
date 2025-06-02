"use client";

import React, { useState } from "react";
import { Field, initialValues, signUpFields, StateFields } from "./fields";
import { signOut, signIn, useSession } from "next-auth/react";
import Link from "next/link";

interface IProps {
  isSingup: boolean;
}

const AuthPage: React.FC<IProps> = ({ isSingup }) => {
  const [formData, setFormData] = useState<StateFields>(initialValues);

  const handleSubmit = () => {};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
      {signUpFields.map((field, index) => (
        <input
          key={field.name + index}
          type={field.type}
          placeholder={field.placeholder}
          value={formData[field.name as keyof typeof formData]}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded"
          required={field.required}
          name={field.name}
        />
      ))}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Sign In
      </button>
      <p className="mt-4 text-center text-sm">
        Don't have an account?{" "}
        <Link href="/auth/signup" className="text-blue-600 hover:underline">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default AuthPage;
