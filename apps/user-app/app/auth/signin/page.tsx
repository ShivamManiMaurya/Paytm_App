import React from "react";
import AuthPage from "../../components/auth/authPage";

const SignInPage = () => {
  return (
    <div className=" flex justify-center items-center w-full h-screen ">
      <AuthPage isSingup={true} />
    </div>
  );
};

export default SignInPage;
