"use server";

import { BaseUrl } from "../../Enviroment";

export const userSignUp = async (formData: FormData) => {
  const userData = {
    name: formData.get("name") as string,
    number: formData.get("number") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  try {
    const baseUrl = BaseUrl() || "";
    const response = await fetch(`${baseUrl}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    // Return the exact API response including status
    return {
      success: response.ok,
      status: response.status,
      ...data,
    };
  } catch (error) {
    console.error("Network error:", error);
    return {
      success: false,
      status: 503,
      error: "Network error - could not connect to server",
    };
  }
};
