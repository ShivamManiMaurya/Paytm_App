"use client";

import React, { useMemo, useState } from "react";
import {
  initialFormState,
  signInFields,
  signUpFields,
  TFormField,
} from "./fields";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { validateField } from "./helpers";
import { toast } from "react-toastify";
import Input from "./Input";
import MainLoader from "../common/MainLoader";

interface IProps {
  isSignup: boolean;
}

const AuthPage: React.FC<IProps> = ({ isSignup }) => {
  const [formData, setFormData] = useState<TFormField>(initialFormState);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate all fields
    const newErrors: Record<string, string> = {};
    fields.forEach((field) => {
      newErrors[field.name] = validateField(
        field.name,
        formData.values[field.name] || "",
        formData.values,
        fields
      );
    });

    setFormData((prev) => ({
      ...prev,
      errors: newErrors,
      touched: fields.reduce(
        (acc, field) => ({ ...acc, [field.name]: true }),
        {}
      ),
    }));

    // Check if form is valid
    const isValid = Object.values(newErrors).every((error) => !error);
    if (!isValid) {
      toast.error("Please enter a valid value.");
      setIsLoading(false);
      return;
    }

    // Proceed with signup/login
    try {
      if (isSignup) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/users`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: formData.values.name,
                email: formData.values.email,
                number: formData.values.phone,
                password: formData.values.password,
              }),
            }
          );

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.error || "Signup failed");
          }

          toast.success(data.message);
          window.location.href = "/auth/signin";
        } catch (error: any) {
          toast.error(error.message);
        }
      } else {
        const res = await signIn("credentials", {
          redirect: false,
          phone: formData.values.phone,
          password: formData.values.password,
          callbackUrl: "/",
        });

        if (res?.ok) {
          window.location.href = res.url || "/";
        } else {
          toast.error("Invalid creds");
        }
      }
    } catch (error: any) {
      toast.error(error.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValues = { ...formData.values, [name]: value };

    if (name === "password") {
      const confirmPasswordError = validateField(
        "confirmPassword",
        newValues.confirmPassword || "",
        newValues,
        fields
      );

      setFormData((prev) => ({
        ...prev,
        values: newValues,
        errors: {
          ...prev.errors,
          [name]: validateField(name, value, newValues, fields),
          confirmPassword: confirmPasswordError,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        values: newValues,
        errors: {
          ...prev.errors,
          [name]: validateField(name, value, newValues, fields),
        },
      }));
    }
  };

  const handleBlur = (name: string) => {
    setFormData((prev) => ({
      ...prev,
      touched: {
        ...prev.touched,
        [name]: true,
      },
    }));
  };

  const fields = useMemo(() => {
    return isSignup ? signUpFields : signInFields;
  }, [signUpFields, signInFields]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {isSignup ? "Sign Up" : "Sign In"}
      </h2>
      {fields.map((field, index) => (
        <Input
          key={field.name + index}
          field={field}
          formData={formData}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      ))}
      <button
        type="submit"
        className={`w-full ${isLoading ? "bg-gray-400" : "bg-blue-600"} cursor-pointer ${isLoading ? "text-gray-200" : "text-white"} py-2 rounded hover:opacity-95 flex justify-center items-center`}
        disabled={isLoading}>
        {isLoading ? (
          <MainLoader
            loadingMsg={isSignup ? "Signing Up..." : "Signing In..."}
          />
        ) : isSignup ? (
          "Sign Up"
        ) : (
          "Sign In"
        )}
      </button>
      <p className="mt-4 text-center text-sm">
        {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
        <Link
          href={isSignup ? "/auth/signin" : "/auth/signup"}
          className="text-blue-600 hover:underline">
          {isSignup ? "Sign In" : "Sign Up"}
        </Link>
      </p>
    </form>
  );
};

export default AuthPage;
