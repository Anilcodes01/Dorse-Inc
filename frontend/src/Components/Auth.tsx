import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@anil_codes/common-modules";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        
          postInputs,
        
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      console.log('request failed: ', error)
    }
  }

  return (
    <div className="h-screen font-poppins flex justify-center flex-col">
      <div className="flex  justify-center">
        <div className="outline-none  shadow-2xl  p-4 rounded-lg">
          <div className="px-10 ">
            <div className="text-3xl font-extrabold">
              {type === "signup" ? "Create an account" : "Welcome back!"}
            </div>
            <div className="text-center pt-2">
              {type === "signin"
                ? "Don't have an account?"
                : "Already have an account?"}
              <Link to={type === "signin" ? "/signup" : "/signin"}>
                {" "}
                {type === "signin" ? "Sign up" : "Login"}
              </Link>
            </div>
          </div>
          <div className="pt-8 flex flex-col gap-4 font-semibold">
            {type === "signup" ? (
              <LabelledInput
                label="Username"
                placeholder="Enter your username"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    username: e.target.value,
                  });
                }}
              />
            ) : null}
            <LabelledInput
              label="Email"
              placeholder="Enter your email"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  email: e.target.value,
                });
              }}
            />
            <LabelledInput
              type="Password"
              label="Password"
              placeholder="Enter your Password"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
            />
            <button
              type="button"
              onClick={sendRequest}
              className="py-2 w-full mt-2 me-2 mb-2 text-md font-medium text-white bg-black rounded-lg hover:bg-gray-900"
            >
              {type === "signup" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  type?: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({
  type,
  label,
  placeholder,
  onChange,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm font-bold text-gray-900 ">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 outline-none bg-gray-200 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
}
