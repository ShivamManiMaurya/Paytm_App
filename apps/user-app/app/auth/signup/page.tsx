import React from "react";
import AuthPage from "../../components/auth/authPage";

const SignUpPage = () => {
  return (
    <div
      className=" flex justify-center items-center w-full h-screen "
      style={{ height: "calc(100vh - 62px)" }}>
      <AuthPage isSignup={true} />
    </div>
  );
};

export default SignUpPage;
