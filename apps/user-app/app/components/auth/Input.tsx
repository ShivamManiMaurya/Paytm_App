import React, { useState } from "react";
import { Field, TFormField, TPassword } from "./fields";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

interface IProps {
  field: Field;
  formData: TFormField;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (name: string) => void;
}

const Input: React.FC<IProps> = ({
  field,
  formData,
  handleChange,
  handleBlur,
}) => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  return (
    <div key={field.name} className="mb-4">
      <label className="block text-gray-700 text-sm font-bold ">
        {field.label}
        {field.required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          type={
            field.name === "password" || field.name === "confirmPassword"
              ? showPassword[field.name]
                ? "text"
                : "password"
              : field.type
          }
          placeholder={field.placeholder}
          value={formData.values[field.name] ?? ""}
          onChange={handleChange}
          onBlur={() => handleBlur(field.name)}
          className={`w-full p-2 border rounded ${
            formData.touched[field.name] && formData.errors[field.name]
              ? "border-red-500"
              : "border-gray-300"
          }`}
          required={field.required}
          name={field.name}
          inputMode={field.inputMode}
        />
        {(field.name === "password" || field.name === "confirmPassword") && (
          <button
            type="button"
            onClick={() =>
              setShowPassword((prev) => {
                return {
                  ...prev,
                  [field.name]: !prev[field.name as TPassword],
                };
              })
            }
            className="absolute top-3 right-3 text-sm text-gray-500 z-10 cursor-pointer">
            {showPassword[field.name] ? (
              <FaEyeSlash className="text-gray-600 size-4" />
            ) : (
              <FaEye className="text-gray-600 size-4" />
            )}
          </button>
        )}
      </div>
      {formData.touched[field.name] && formData.errors[field.name] && (
        <p className="text-red-500 text-xs mt-1">
          {formData.errors[field.name]}
        </p>
      )}
    </div>
  );
};

export default Input;
