import React, { useState } from "react";
import InputField from "./common/InputField";
import Checkbox from "./common/Checkbox";

const GradientImage = ({ src, alt, position }) => (
  <img src={src} alt={alt} className={`absolute ${position} h-1/2 z-0`} />
);

const AuthButton = ({ children, onClick, className }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex justify-center items-center gap-2 rounded p-2 w-1/2 ${className}`}
  >
    {children}
  </button>
);

const StoreButton = ({ icon, line1, line2 }) => (
  <button className="flex items-center bg-black rounded text-white p-2 space-x-2">
    <img src={icon} alt={`${line2} Icon`} className="h-6 w-6" />
    <span className="grid text-left">
      <span className="text-[10px]">{line1}</span>
      <span className="font-bold text-base">{line2}</span>
    </span>
  </button>
);

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailOrPhone: "",
    dob: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex h-screen relative">
      <GradientImage
        src="/images/right-grad.png"
        alt="Left Gradient"
        position="left-0 bottom-0"
      />
      <GradientImage
        src="/images/left-grad.png"
        alt="Right Gradient"
        position="right-0 bottom-0"
      />

      <div className="flex-1 flex">
        <img
          src="/images/login-bg.png"
          alt="Daikin"
          className="h-full w-11/12 mb-3"
        />
      </div>

      <div className="flex-1 py-10 flex flex-col justify-center bg-white shadow-md font-montserrat">
        <div className="max-w-2xl mx-auto mt-6">
          <header className="mb-5 flex justify-between items-center">
            <img src="/images/logo.png" alt="Daikin Logo" className="h-8" />
            <div className="flex justify-center items-center bg-[#00B3FF] w-16 h-13 rounded-full p-1 fixed right-0">
              <img src="/images/Bot.png" alt="AI Icon" className="w-10 h-8" />
            </div>
          </header>

          <h2 className="text-2xl font-semibold mb-5">Create account</h2>

          <form className="grid gap-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="First name"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <InputField
                label="Last name"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="Email or phone number"
                name="emailOrPhone"
                placeholder="Email or phone number"
                value={formData.emailOrPhone}
                onChange={handleChange}
              />
              <InputField
                label="Date of birth"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                note="(MM/DD/YY)"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <InputField
                label="Confirm password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-between items-center">
              <Checkbox
                label="Remember me"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <a href="/#" className="text-[#007AFF] underline">
                Forgot password?
              </a>
            </div>

            <div>
              <Checkbox
                label={
                  <>
                    I agree to all the{" "}
                    <a href="/#" className="text-[#007AFF]">
                      Terms
                    </a>{" "}
                    and{" "}
                    <a href="/#" className="text-[#007AFF]">
                      Privacy policy
                    </a>
                  </>
                }
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center justify-between mt-4 gap-8">
              <AuthButton className="bg-[#00A0E4] text-white">
                Create account
              </AuthButton>
              <AuthButton className="bg-[#2D3748] text-white">
                <img
                  src="/images/google-icon.png"
                  alt="Google Icon"
                  className="w-5 h-5"
                />
                Sign-in with Google
              </AuthButton>
            </div>
          </form>

          <footer className="my-4 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a href="/#" className="text-[#007AFF]">
                Log in
              </a>
            </p>
          </footer>

          <div className="flex gap-4">
            <StoreButton
              icon="/images/icons/play-store.png"
              line1="GET IT ON"
              line2="Google Play"
            />
            <StoreButton
              icon="/images/icons/apple.png"
              line1="Download on the"
              line2="App Store"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
